import axios from "axios";

const settings = {}

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1',
        withCredentials: true,
        headers: {
            'API-KEY': 'a99718f7-23ff-4c8c-aaa8-bda50310d20d',
        }
    }
)

export const todoListApi = {
    update: (todoId: string, title: string) => {
        return instance.put(`/todo-lists/${todoId}`, {title})
    },
    create: (title: string) => {
        return instance.post('/todo-lists', {title})
    },
    delete: (todoId: string) => {
        return instance.delete(`/todo-lists/${todoId}`)
    },
    get: () => {
        return instance.get('/todo-lists')

    }
}