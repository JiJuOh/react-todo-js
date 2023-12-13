import React, { createContext, useReducer, useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import TodoHeader from './components/todos/TodoHeader'
import TodoBody from './components/todos/TodoBody'
import { TodoContext, TodoDispatchContext } from './contexts/TodoContext';

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
];

const reducer = (todos, action) => {
  console.log(action);

  switch (action.type) {
    case 'ADD': 
      return [...todos, action.newTodo];

    case 'UPDATE': 
      const { updateTodo } = action;
      return todos.map(todo => todo.id === updateTodo.id ? { ...updateTodo } : todo);

    case 'DELETE': 
      const { id } = action;
      return todos.filter(todo => todo.id !== id);
  }

}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, dummyTodos);
  const [selectedCategory, setFilter] = useState('ALL');

  // Todo 필터링 기능
  const filterTodos = (todos, selectedCategory) => selectedCategory === 'ALL' ? todos : todos.filter(todo => todo.category === selectedCategory);
  const filteredTodos = filterTodos(todos, selectedCategory);

  return (
    <DefaultLayout>
      <div>
        <header>
          <div className="flex justify-center">
            <a to="/">
              <h1 className='py-8 text-red-200 max-w-max text-7xl'>todos</h1>
            </a>
          </div>
        </header>
        <section>
        <TodoContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={dispatch}>
            <TodoHeader category={selectedCategory} onFilter={setFilter} />
            <TodoBody todos={filteredTodos} />
          </TodoDispatchContext.Provider>
        </TodoContext.Provider>  
        </section>
      </div>
    </DefaultLayout>
  )
}

export default App