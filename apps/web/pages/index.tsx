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

        <button type="submit">Aqui</button>
      </form>
    </div>
  );
}
