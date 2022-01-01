import React, { useState } from "react";
import "./styles.css";
import {InputTodo}  from './components/InputTodo';
import {IncompleteTodos}  from './components/IncompleteTodos';
import {CompleteTodos}  from './components/CompleteTodos';

export const App=()=>{
    const [incompleteTodos,setIncompleteTodos]=useState(["あああ","いいい"]);
    const [completeTodos,setcompleteTodos]=useState(['ううう','えええ'])
    const [todoText,setTodoText]=useState('');

    const onChangeTodoText=(event)=>{
        setTodoText(event.target.value);
    }

    const onClickAdd=()=>{
        if(todoText=="")return "";
        const newTodos=[...incompleteTodos,todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }

    const onClickDelete=(index)=>{
        const newTodos=[...incompleteTodos];
        newTodos.splice(index,1);
        setIncompleteTodos(newTodos);
    }

    const onClickComplete=(index)=>{
        const newIncompleteTodos=[...incompleteTodos];
        newIncompleteTodos.splice(index,1);
        const newCompleteTodos=[...completeTodos,incompleteTodos[index]];
        setcompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos); 
    }

    const onClickBack=(index)=>{
        const newCompleteTodos=[...completeTodos];
        newCompleteTodos.splice(index,1);
        const newIncompleteTodos=[...incompleteTodos,completeTodos[index]];
        setcompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }

    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}></InputTodo>
            <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}></IncompleteTodos>
            <CompleteTodos todos={completeTodos} onClickBack={onClickBack}></CompleteTodos>
        </>
    );
};