import { FC } from 'react';

export const Usage: FC = () => {
  return (
    <section
      id="start"
      className="m-t-40 flex items-center h-screen bg-darker-900 bg-code bg-no-repeat bg-center bg-cover"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-0 py-24 overflow-x-auto md:overflow-x-hidden">
        <pre>
          <code className="font-bold font-mono text-1xl md:text-2xl flex flex-col">
            <span className="text-blue flex flex-col">
              &lt;!--{' '}
              <span>{'  '}Replace the Bee with your favorite emoji.</span>
              <span>
                {'  '}Find emojis at Emojipedia.{' '}
                <a
                  href="https://emojipedia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Emojipedia
                </a>
                .{' '}
              </span>
              --&gt;
            </span>

            <span className="text-light-50 ">
              &lt;
              <span className="text-pink">link</span>{' '}
              <span className="text-green">rel</span>
              <span className="text-pink">=</span>
              <span className="text-yellow">&quot;icon&quot;</span>{' '}
              <span className="text-green">href</span>
              <span className="text-pink">=</span>
              <span className="text-yellow">
                &quot;https://favicon.magnobiet.com/e/🐝&quot;
              </span>{' '}
              /&gt;
            </span>
          </code>
        </pre>
      </div>
    </section>
  );
};
