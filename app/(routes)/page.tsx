import AddTodo from "@/components/todo/add-todo";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-10">
      <h2 className="text-8xl font-bold tracking-wide leading-tight">This is the {" "} <br /><span className="text-orange-500">home page</span></h2>

      <AddTodo />
    </div>
  );
};

export default HomePage;
