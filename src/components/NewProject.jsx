import Input from "./Input";
import Button from "./Button";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button className="text-stone-800 hover:text-stone-950">
            Cancel
          </Button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>

      <div>
        <Input label="Title" />
        <Input label="Description" isTextArea />
        <Input type="date" label="Due Date" />
      </div>
    </div>
  );
}
