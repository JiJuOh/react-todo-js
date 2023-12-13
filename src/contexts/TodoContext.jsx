import { createContext } from "react";

// 외부에서 사용할 수 있도록 export
export const TodoContext = createContext(); // Todos 데이터 제공 용도의 Context
export const TodoDispatchContext = createContext(); // Todos Dispatch() 제공 용도의 Context