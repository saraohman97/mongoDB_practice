"use client";

import { Todo } from "@prisma/client";
import { Edit, Trash } from "lucide-react";
import EditTodo from "./edit-todo-modal";
import { useState } from "react";
import { changeStatus } from "@/actions/todoactions";

interface TodoProps {
  todo: Todo;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [editModal, setEditModal] = useState(true);

  return (
    <div className="border-b mb-2 flex items-center justify-between">
      <form action={changeStatus}>
        <input type="hidden" name="inputId" value={todo.id} />
        <button
          type="submit"
          className={`w-4 h-4 border rounded-sm ${
            todo.isCompleted && "bg-orange-300"
          }`}
        />
      </form>
      <span className={todo.isCompleted ? "line-through text-gray-300" : ""}>
        {todo.title}
      </span>
      <div className="flex items-center gap-2">
        <Edit size={15} onClick={() => setEditModal(true)} />
        {editModal && <EditTodo todo={todo} />}
        <Trash size={15} />
      </div>
    </div>
  );
};

export default Todo;
