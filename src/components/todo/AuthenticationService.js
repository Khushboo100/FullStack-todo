import { configure } from "@testing-library/react"
import axios from "axios"
import {API_URL} from '../../Constants'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser' 

class AuthenticationService{
    
    executeBasicAuthenticationService(username,password){
        return axios.get(`${API_URL}/basicauth`,
                    {headers: {authorization:this.createBasicAuthToken(username,password)}})
    }

    executeJwtAuthenticationService(username,password){
        return axios.post(`${API_URL}/authenticate`,
        {username,
        password}
        )
    }
    createBasicAuthToken(username,password){
            return'Basic ' + window.btoa(`${username}:${password}`);
       
    }
    registerSuccessfulLogin(username,password){
        // console.log('registerSuccessfulLogin')
        // sessionStorage.setItem('authenticatedUser',username)
        // let basicAuthHeader='Basic ' + window.btoa(`${username}:${password}`);
        
        // console.log("registerSuccessfulLogin")
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username)
        this.setupAxiosInterneptors(this.createBasicAuthToken(username,password))

    }
    createJwtToken(token){
        return 'Bearer ' + token
    }
    registerSuccessfulLoginForJwt(username,token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username)
        this.setupAxiosInterneptors(this.createJwtToken(token))

    }
    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }

    isUserLoggedIn(){
        // console.log(sessionStorage.getItem('authenticatedUser'))
        let user= sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user==null)  return false
        return true
    }
    getLoggedInUserName(){
        let user= sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user==null)  return ''
        return user
    }
    setupAxiosInterneptors(token){
        
        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
                    config.headers.authorization=token
                }
                return config
            }
        )
    }
}
export default new AuthenticationService()