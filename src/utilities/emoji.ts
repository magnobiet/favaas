export const isEmoji = (content: string) => {
  const emojiRegex = /\p{Extended_Pictographic}/gu;

  return emojiRegex.test(content);
};
