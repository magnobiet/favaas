import { NextRequest, NextResponse } from 'next/server';
import { isEmoji } from '~/src/utilities';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ emoji: string }> },
) {
  const paramsResult = await params;
  const emojiParam = paramsResult?.emoji;

  console.log('Received request for emoji path param:', emojiParam);

  if (!emojiParam) {
    return new NextResponse('Missing emoji parameter', { status: 400 });
  }

  const content = decodeURIComponent(emojiParam);

  if (!isEmoji(content)) {
    return new NextResponse('Invalid emoji parameter', { status: 400 });
  }

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${content}</text></svg>`;

  return new NextResponse(svgContent, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'Content-Disposition': 'inline; filename=favicon.svg',
      'Content-Type': 'image/svg+xml; charset=utf-8',
    },
  });
}
