const BLOG_API = 'https://blog.magneo.ca/wp-json/wp/v2/posts?per_page=100&_fields=id,link,title,excerpt,status';

function plainText(value = '') {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#038;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

export default async function handler(request, response) {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.setHeader('Allow', 'GET, HEAD');
    return response.status(405).end();
  }
  try {
    const upstream = await fetch(BLOG_API, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(8000) });
    if (!upstream.ok) throw new Error(`Blog API returned ${upstream.status}`);
    const posts = await upstream.json();
    if (!Array.isArray(posts)) throw new Error('Unexpected blog response');
    const results = posts
      .filter((post) => {
        try { return post.status === 'publish' && new URL(post.link).origin === 'https://blog.magneo.ca'; }
        catch { return false; }
      })
      .map((post) => ({
        title: plainText(post.title?.rendered),
        description: plainText(post.excerpt?.rendered).slice(0, 220),
        url: post.link,
        type: 'Article'
      }));
    response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=86400');
    response.setHeader('X-Robots-Tag', 'noindex, nofollow');
    response.status(200).json(results);
  } catch {
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Robots-Tag', 'noindex, nofollow');
    response.status(502).json([]);
  }
}
