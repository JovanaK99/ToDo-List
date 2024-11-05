import { useState } from "react"

export default function EditTodo({text, id,  onSubmit}){
    const [task, setTask] = useState(text);

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(id, task);
    }

    return (
        <form onSubmit={handleSubmit} className="edit-form relative p-4 bg-gray-100 rounded-lg shadow-md">
        {/* <button
            type="button"
            onClick={onCancel}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
        >
            ×
        </button> */}
        <div className="flex gap-2 items-center">
            <input
                className="border border-gray-300 rounded-md p-2 flex-grow"
                value={task}
                onChange={handleChange}
                placeholder="Update task"
            />
            <button className="bg-blue-500 text-white rounded-full px-4 py-2">Update</button>
        </div>
    </form>
    )
    
}