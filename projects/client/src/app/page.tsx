import { Button } from 'components/ui/button';
import React from 'react';

// import { Badge, Button } from '#ui-client';

const Home = () => {
  return (
    <main className="flex bg-amber-500 !important min-h-screen flex-col gap-5 items-center p-24">
      <Button size="default">Click me</Button>
      <Button size="icon" color="blue">X</Button>
      <Button size="sm" className="bg-green-500">Click me</Button>
      <Button size="lg">Click me</Button>
      <Button size="icon" disabled>X</Button>
      {/* <Badge
        variant="default"
        className="bg-red-500 text-white"
      >
        Default Badge
      </Badge> */}

      <div className="w-24 bg-red">yop div</div>
    </main>
  );
};

export default Home;
