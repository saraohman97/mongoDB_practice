import { edit } from "@/actions/todoactions";
import { Todo } from "@prisma/client";
import { X } from "lucide-react";
import { useState } from "react";

interface EditProps {
  todo: Todo;
  setEditModal: () => void;
}

const EditTodo: React.FC<EditProps> = ({ todo, setEditModal }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };
  const handleSubmit = () => {
    setEditTodo(false);
    setEditModal(false)
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-10 flex flex-col items-center justify-center max-w-2xl gap-10 relative">
        <h1 className="text-xl">Update todo</h1>
        <button className="absolute top-2 right-2" onClick={() => setEditModal(false)}>
          <X />
        </button>

        <form action={edit} onSubmit={handleSubmit}>
          <input type="hidden" name="inputId" value={todo.id} />
          <input
            type="text"
            className="border p-2 rounded-md"
            name="newTitle"
          />
          <button className="bg-orange-500 p-2 border rounded-md" type="submit">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
