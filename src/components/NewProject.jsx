import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <button className="">Cancel</button>
        <button className="bg-stone-950">Save</button>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" isTextArea />
        <Input type="date" label="Due Date" />
      </div>
    </div>
  );
}
