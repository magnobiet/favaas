import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmoji(content: string) {
  const emojiRegex = /\p{Extended_Pictographic}/gu;

  return emojiRegex.test(content);
}
