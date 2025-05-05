import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
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

      <Container as={Button} />
    </main>
  );
}

export default App;
