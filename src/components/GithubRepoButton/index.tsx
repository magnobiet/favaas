'use client';

import { GithubLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function GithubRepoButton() {
  return (
    <Button variant="honey" size="xl" asChild>
      <Link
        href="https://github.com/magnobiet/favaas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogoIcon />
        Ver projeto no GitHub
      </Link>
    </Button>
  );
}
