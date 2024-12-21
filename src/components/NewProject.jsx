import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button className="text-stone-800 hover:text-stone-950">
            Cancel
          </Button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>

      <div>
        <Input ref={title} type="text" label="Title" />
        <Input ref={description} label="Description" isTextArea />
        <Input ref={dueDate} type="date" label="Due Date" />
      </div>
    </div>
  );
}
