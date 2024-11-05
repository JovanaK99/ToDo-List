import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Modal from "./Modal";


export default function ToDoItems({text, id, isComplete, deleteTasks, toggle, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () =>{
       setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newText) => {
        setShowEdit(false);
        onEdit(id, newText);
    }
    const handleCloseModal = () => {
        setShowEdit(false);
    };

    let content = <p className="break-words max-w-full">{text}</p>;
    if (showEdit) {
        content =   <Modal onClose={handleCloseModal} onSubmit={handleSubmit} text={text} id={id}/>
                      
    }
    
    return (
        <div className="flex items-start my-3 gap-2 flex-wrap">
            <div className="flex items-center flex-1">
                <div onClick={() => { toggle(id) }} className="cursor-pointer mt-1">
                    {isComplete ? <FaCheckCircle /> : <FaRegCircle />}
                </div>
                <div 
                    className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""} break-words`} 
                    style={{ maxWidth: '50%' }}  // Fiksirana širina na 50%
                >
                    {content}
                </div>
            </div>
            <div className="ml-auto flex gap-2 items-start mt-1">
                <FiEdit onClick={handleEditClick} className="w-4 h-4 cursor-pointer" />
                <MdOutlineDeleteOutline onClick={() => { deleteTasks(id) }} className="w-4 h-4 cursor-pointer" />
            </div>
        </div>
    );
    
    
    
}