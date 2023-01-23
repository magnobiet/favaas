import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="max-w-6xl mx-auto py-8 px-4 md:px-0">
      <p className="text-sm text-gray-600 text-center xl:text-left">
        Made by{' '}
        <a
          href="https://magnobiet.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          MagnoBiét.com
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};
