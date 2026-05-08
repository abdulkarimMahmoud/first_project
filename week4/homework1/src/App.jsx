import { useState } from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Anecdotes from './components/Anecdotes'
import Unicafe from './components/Unicafe'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Counter/>
         <hr/>
         <TodoList/>
         <hr/>
         <Anecdotes/>
         <hr/>
         <Unicafe/>

    </>
  )
}

export default App
