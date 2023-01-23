import { FC } from 'react';

export const Introduction: FC = () => {
  return (
    <section className="max-w-6xl mx-auto text-center h-screen flex flex-row items-center justify-center">
      <div>
        <h2 className="text-7xl md:text-8xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue to-purple">
            Favicon
          </span>{' '}
          as a Service
        </h2>

        <p className="text-xl text-gray-600 mb-8">
          <abbr title="Favicon as a Service" className="no-underline">
            Favaas
          </abbr>{' '}
          is a free service that allows you to create a favicon for your website
          in seconds.
        </p>

        <a
          href="#start"
          className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded"
        >
          Start using it now. It&apos;s free. 🚀
        </a>
      </div>
    </section>
  );
};
