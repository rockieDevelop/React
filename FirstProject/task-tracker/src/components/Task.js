import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes onClick={() => onDelete(task.id)} //onClick={onDelete} - we pass whole object task
                style={{ color: 'red', cursor: 'pointer' }}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
