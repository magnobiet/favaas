import { VercelRequest, VercelResponse } from "@vercel/node";

const isEmoji = (content) => {
  const emojiRegex = /\p{Extended_Pictographic}/gu;

  return emojiRegex.test(content);
};

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  response.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  response.setHeader("Content-Disposition", "inline; filename=favicon.svg");

  const { emoji } = request.query;
  const content = decodeURIComponent(emoji as string);

  if (isEmoji(content)) {
    return response
      .status(200)
      .send(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${content}</text></svg>`
      );
  }

  return response.status(404).send("");
}
