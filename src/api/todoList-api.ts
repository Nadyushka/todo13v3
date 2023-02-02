import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'a99718f7-23ff-4c8c-aaa8-bda50310d20d',
    }
}

export const todoListApi = {
    update: (todoId: string, title: string) => {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, {title}, settings)
    },
}