import { FC } from 'react';
import { GoMarkGithub } from 'react-icons/go';

export const Header: FC = () => {
  return (
    <header className="fixed w-full top-0 bg-white md:bg-opacity-50 backdrop-blur-sm">
      <div className="py-4 max-w-6xl mx-auto px-5 sm:px-6 flex flex-row justify-between items-center">
        <h1 className="text-5xl">
          🐝
          <span className="sr-only"> Favicon as a Service</span>
        </h1>

        <a
          href="https://github.com/magnobiet/favaas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-200 bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded"
        >
          <GoMarkGithub />
          GitHub
        </a>
      </div>
    </header>
  );
};
