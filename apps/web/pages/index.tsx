import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button onPress={() => console.log('is clicked')}
        type="reset"
      >
        Prueba
      </Button>
    </div>
  );
}
