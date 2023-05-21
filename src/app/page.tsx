import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function Page(){
    return(
        <main className="flex justify-center items-center bg-gradient-to-tr from-primary to-secondary h-auto">
            <div className="w-full max-w-md px-2 py-3 rounded-xl my-5 bg-white/40">
                {/* @ts-ignore */}
                <TodoList/>
                <AddTodo/>

                <div className="h-1 w-1/2 mx-auto bg-black/80 mt-6"></div>
            </div>
        </main>
    )
}