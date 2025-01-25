import { useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input.trim(),
        completed: false
      }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =&gt;
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo =&gt; todo.id !== id))
  }

  return (
    &lt;div className="min-h-screen bg-gray-100 p-8"&gt;
      &lt;div className="max-w-md mx-auto bg-white rounded-lg shadow p-6"&gt;
        &lt;h1 className="text-2xl font-bold mb-6 text-gray-800"&gt;Todo App&lt;/h1&gt;
        
        &lt;form onSubmit={addTodo} className="mb-6 flex gap-2"&gt;
          &lt;input
            type="text"
            value={input}
            onChange={(e) =&gt; setInput(e.target.value)}
            placeholder="Add a new todo"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          /&gt;
          &lt;button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          &gt;
            Add
          &lt;/button&gt;
        &lt;/form&gt;

        &lt;div className="space-y-2"&gt;
          {todos.map(todo =&gt; (
            &lt;div key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"&gt;
              &lt;div className="flex items-center gap-3"&gt;
                &lt;input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =&gt; toggleTodo(todo.id)}
                  className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                /&gt;
                &lt;span className={`${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}&gt;
                  {todo.text}
                &lt;/span&gt;
              &lt;/div&gt;
              &lt;button
                onClick={() =&gt; deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-600 transition-colors"
              &gt;
                Delete
              &lt;/button&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}
