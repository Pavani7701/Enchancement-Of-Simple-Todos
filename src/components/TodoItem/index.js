// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeltetTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-items">
      <p className="name">{title}</p>
      <button type="button" className="button" onClick={onDeltetTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
