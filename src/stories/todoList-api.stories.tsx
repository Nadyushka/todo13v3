import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'a99718f7-23ff-4c8c-aaa8-bda50310d20d',
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then(res => {
                const result = res.data
                setState(result)
            })


    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoName = 'REACT&REDAX';
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: todoName}, settings)
            .then(res=> {
                const result = res.data
                setState(result)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'a1d557d7-b6b0-4a30-9377-563d0235297c';
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings)
            .then(res=> {
                const result = res.data
                setState(result)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoName = 'REACT';
        const todoId = '6b4221bf-e061-47da-be4e-257e201d9df5'
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,{title:todoName}, settings)
            .then(res=> {
                const result = res.data
                setState(result)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

