import EditTodo from "./EditTodo";

export default function Modal({ children, onClose, onSubmit, text, id }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded shadow-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">X</button>
                <EditTodo onSubmit={onSubmit} text={text} id={id}/>
            </div>
        </div>
    );
}