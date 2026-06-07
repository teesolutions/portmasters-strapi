module.exports = function normalizeMinioEndpoint(endpoint) {
  if (!endpoint) {
    return endpoint;
  }

  let url = endpoint.trim();

  // Fix malformed values like "minio.railway.internal://9000"
  const malformedMatch = url.match(/^([^:/]+):\/\/(\d+)$/);
  if (malformedMatch) {
    url = `${malformedMatch[1]}:${malformedMatch[2]}`;
  }

  if (!/^https?:\/\//i.test(url)) {
    url = `http://${url}`;
  }

  return url.replace(/\/+$/, "");
};
