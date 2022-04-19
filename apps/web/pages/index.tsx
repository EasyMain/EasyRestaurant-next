import { InputBase } from "ui";

export default function Web() {
  return (
    <div className="flex justify-center py-20 px-10">
      {/* <Button onPress={() => console.log('is clicked')}
        type="reset"
      >
        Prueba
      </Button> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit");
        }}
        className="w-full flex flex-col gap-10"
      >
        <InputBase
          label="Descripción"
          description="Esto es una descripcion"
        />
        <button type="submit">Aqui</button>
      </form>
    </div>
  );
}
