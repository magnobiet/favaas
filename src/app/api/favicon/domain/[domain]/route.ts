import { NextRequest, NextResponse } from 'next/server';
import { detectFaviconContentType } from '~/utilities';

const DEFAULT_SIZE = 32;
const ALLOWED_SIZES = [16, 32, 48, 64, 96, 128, 256];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ domain: string }> },
) {
  const paramsResult = await params;
  const rawDomain = paramsResult?.domain;

  if (!rawDomain) {
    return new NextResponse('Missing domain parameter', { status: 400 });
  }

  let domain = decodeURIComponent(rawDomain).trim();

  try {
    const url = new URL(domain.includes('://') ? domain : `https://${domain}`);
    domain = url.hostname;
  } catch {
    return new NextResponse('Invalid domain parameter', { status: 400 });
  }

  const sizeParam = request.nextUrl.searchParams.get('size');
  const size = sizeParam ? Number(sizeParam) : DEFAULT_SIZE;

  if (!ALLOWED_SIZES.includes(size)) {
    return new NextResponse('Invalid size parameter', { status: 400 });
  }

  const googleUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
    domain,
  )}&sz=${size}`;

  const googleResponse = await fetch(googleUrl);
  const responseHeaders = new Headers(googleResponse.headers);
  responseHeaders.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');

  const bodyBuffer = await googleResponse.arrayBuffer();
  const contentType = detectFaviconContentType(responseHeaders, bodyBuffer);
  responseHeaders.set('Content-Type', contentType);
  responseHeaders.set(
    'Content-Disposition',
    `inline; filename=favicon.${contentType.endsWith('icon') ? 'ico' : 'png'}`,
  );

  return new NextResponse(bodyBuffer, {
    status: googleResponse.status,
    headers: responseHeaders,
  });
}
