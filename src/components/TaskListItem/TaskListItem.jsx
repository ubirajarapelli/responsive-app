import './TaskListItem.css'

export const TaskListItem = ({ children }) => {
  return (
    <div className="task-list-item">
      <input type="checkbox" name="name" id="id" />
      {children}
      <button>Excluir</button>
    </div>
  )
}
