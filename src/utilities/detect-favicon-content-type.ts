export function detectFaviconContentType(headers: Headers, data: ArrayBuffer) {
  const headerType = headers.get('Content-Type')?.toLowerCase();

  if (headerType) {
    if (headerType.includes('png')) return 'image/png';
    if (headerType.includes('icon') || headerType.includes('vnd.microsoft.icon') || headerType.includes('x-icon')) {
      return 'image/x-icon';
    }
  }

  const bytes = new Uint8Array(data.slice(0, 8));
  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return 'image/png';
  }

  if (
    bytes.length >= 4 &&
    bytes[0] === 0x00 &&
    bytes[1] === 0x00 &&
    (bytes[2] === 0x01 || bytes[2] === 0x02) &&
    bytes[3] === 0x00
  ) {
    return 'image/x-icon';
  }

  return 'image/png';
}
