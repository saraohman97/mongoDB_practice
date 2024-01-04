import { Todo } from "@prisma/client";

interface TodoProps {
  todo: Todo;
}

const EditTodo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 z-50 flex items-center justify-center">
      <form className="bg-white rounded-xl p-10 flex flex-col items-center justify-center max-w-2xl gap-10">
        <h1 className="text-xl">Update todo</h1>

        <div>
          <input type="text" className="border p-2 rounded-md" />
          <button className="bg-orange-500 p-2 border rounded-md" type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
