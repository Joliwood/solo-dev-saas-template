import React from 'react';

import { Button } from '#ui-client';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col gap-5 items-center p-24">
      <Button size="default">Click me</Button>
      <Button size="icon" color="blue">X</Button>
      <Button size="sm" className="bg-green-500">Click me</Button>
      <Button size="lg">Click me</Button>
      <Button size="icon" disabled>X</Button>
    </main>
  );
};

export default Home;
