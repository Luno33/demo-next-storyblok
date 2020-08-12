export default (req, res) => {
  res.setPreviewData({})

  // Overwrite the SameSite attribute. Use "Secure" for https version and without "Secure" localhost
  const previous = res.getHeader('Set-Cookie')
  previous.forEach((cookie, index) => {
  	previous[index] = cookie.replace('SameSite=Lax', 'SameSite=None' + (req.headers.host == 'localhost:3000' ? '' : '; Secure'))
  })
  res.setHeader('Set-Cookie', previous)

  // Redirect with storyblok parameters
  res.writeHead(307, { Location: `/${req.query.slug}?_storyblok=${req.url.split('&_storyblok=')[1]}` })
  res.end('Preview mode enabled')
}
