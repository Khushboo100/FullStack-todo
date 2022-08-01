import axios from "axios"


import {API_URL , JPA_API_URL} from '../../Constants'

class TodoDataService{
    retriveAllTodods(name){
        return axios.get(`${JPA_API_URL}/users/${name}/todos`)
    }
    retriveTodo(name,id){
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }
    deleteTodo(name,id){
        // /users/{username}/todos/{id}
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }
    updateTodo(name,id,todo){
        // /users/{username}/todos/{id}
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}` , todo)
    }
    createTodo(name,todo){
        // /users/{username}/todos/{id}
        return axios.post(`${JPA_API_URL}/users/${name}/todos/` , todo)
    }
    
}
export default new TodoDataService()