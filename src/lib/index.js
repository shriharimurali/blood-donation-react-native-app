export function getErorrMessageFromResponse(obj) {
  return Object.keys(obj || {})
    .map(key => `${key}: ${obj[key]}`)
    .join('. ');
}

export default {
  getErorrMessageFromResponse,
};
