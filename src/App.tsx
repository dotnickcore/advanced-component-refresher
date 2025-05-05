import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
  /*
    useRef<...>(): This is a React hook that gives you a mutable reference object. The reference can be attached to a DOM element or any value and will persist across renders without causing re-renders when updated.

    <HTMLInputElement>: This is a TypeScript generic specifying the type of element the ref will point to — in this case, an <input> DOM element. This helps with autocomplete and type safety (e.g., calling input.current?.focus() won't throw an error in TypeScript).

    null: The initial value. Until the input mounts and React assigns the real DOM node, input.current will be null.
  */
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your Age" type="number" />

      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">An Anchor</Button>
      </p>

      <Container as={Button}>Click Me</Container>

      <Input label="Test" id="test" ref={input} />
    </main>
  );
}

export default App;
