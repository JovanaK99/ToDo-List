import './index.css'
import { ToDo } from './components/ToDo'

export default function App() {
    return (
        <div className="bg-blue-200 flex justify-center items-center min-h-screen py-4 overflow-x-hidden">
            <ToDo />
        </div>
    ) 
}