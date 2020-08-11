export default (req, res) => {
  // ...
  res.setPreviewData({});
  res.writeHead(307, { Location: `/home` });
  res.end("Preview mode enabled");
  // ...
};
