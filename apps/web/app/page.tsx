import { Button } from '@workspace/ui/components/button'

export default function Page() {
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

                  <div className="w-24 bg-red text-red-600">yop div</div>
      </div>
    </div>
  )
}
