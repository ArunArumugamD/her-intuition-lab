import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-0 sm:px-6 md:px-8">
      {children}
    </div>
  );
}