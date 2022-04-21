import { Button } from "ui";

export default function Web() {
  return (
    <div className="flex justify-center py-20 px-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit");
        }}
        className="w-full flex flex-col gap-10"
      >

        <Button type="submit">Aqui</Button>
      </form>
    </div>
  );
}
