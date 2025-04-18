"use client"

import { Button } from '@workspace/ui/components/button'
import { useAtomValue } from 'jotai'
import { countryAtom } from '#store_web';

export default function Page() {
  const example = useAtomValue(countryAtom)
  
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <Button size="default">Click me</Button>
        <Button size="icon" color="blue">X</Button>
        <Button size="sm" className="bg-green-500">Click me</Button>
        <Button size="lg">Click me</Button>
        <Button size="icon" disabled>X</Button>

        <p className="w-24 bg-red text-red-600">{example}</p>
      </div>
    </div>
  )
}
