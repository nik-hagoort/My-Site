module.exports = {
  reactStrictMode: true,
  // /doom serves the static game in public/doom. A Next rewrite works in `next
  // start` as well as on Vercel, unlike a vercel.json rewrite.
  async rewrites() {
    return [{ source: '/doom', destination: '/doom/index.html' }];
  },
};
