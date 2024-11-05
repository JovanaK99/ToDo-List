import { useRef, useState, useEffect } from "react"
import ToDoItems from "./ToDoItems"
import { RiCalendarTodoLine } from "react-icons/ri";

export function ToDo() {
    const [tasks, setTasks] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef();

    const addTask = () => {
            const inputText = inputRef.current.value;

            if(inputText === ""){
                return null;
            }
            const newTasks = {
                id: Date.now(),
                text: inputText,
                isComplete: false,
            };
            setTasks((prev) => [...prev, newTasks]);
            inputRef.current.value = "";


    }

    const deleteTasks = (id) => {
            setTasks((prvTodos) => {
                return prvTodos.filter((todo) => todo.id !== id)
            });
    }

    const toggleCompleted = (id) => {
        setTasks((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(tasks));
    },[tasks]);

    const updateTaskById= (id, newText) => {
        const updateTask = tasks.map((task) => {
            if(task.id === id){ 
                return {...task, text:newText}
            }
            return task;
        })
        setTasks(updateTask);
    }



    return (
        <div className="bg-white w-full max-w-md flex flex-col p-7 min-h-[500px] rounded-lg shadow-lg overflow-auto">
            <div className="flex items-center mt-4 gap-2">
                <RiCalendarTodoLine />
                <h1 className="text-2xl font-semibold">To-Do List</h1>   
            </div>
            <div className="flex items-center my-7 bg-blue-100 rounded-full">
                <input ref={inputRef} className="bg-transparent  border-black-900 outline-none flex-1 h-10 pl-6 pr-2 placeholder:text-slate-600 " placeholder="Add task"></input>
                <button onClick={addTask} className="border-none rounded-full bg-blue-500 w-32 h-10 text-white text-base font-medium "> +ADD</button>
            </div>
            <div className="space-y-4">
                {tasks.map((item, index) => {
                    return (
                        <ToDoItems 
                            key={index} 
                            text={item.text} 
                            id={item.id} 
                            isComplete={item.isComplete} 
                            deleteTasks={deleteTasks} 
                            toggle={toggleCompleted} 
                            onEdit={updateTaskById}
                        />
                    );
                })}
            </div>
        </div>
    );
    
    
}