import { create } from "@/actions/todoactions";
import { prisma } from "@/lib/prismadb";
import Todo from "./todo";

async function getData() {
    const data = await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true,
            createdAt: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return data;
}

const AddTodo = async () => {
    const data = await getData()

    return ( 
        <div className="mt-10 max-w-2xl flex flex-col justify-center space-y-4">
            <h2 className="text-2xl text-center">Todo App</h2>

            {/* Add todo form */}
            <form action={create} className="flex items-center gap-2">
                <input className="border p-2 rounded-md" type="text" name="title" placeholder="Add todo...." />
                <button className="bg-orange-500 p-2 border rounded-md" type="submit">Add</button>
            </form>

            {/* Table of data */}
            <div>
                {data.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
                
            </div>
        </div>
     );
}
 
export default AddTodo;