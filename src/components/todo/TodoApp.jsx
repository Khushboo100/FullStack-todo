import React,{Component} from "react";
import {BrowserRouter as Router ,Routes, Route, Link} from 'react-router-dom'
import withNavigation from "./WithNavigation";
import withParams from "./withParams";
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoComponent from "./TodoComponent";


class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation =  withNavigation(LoginComponent)
        const WelcomeComponentWithParams=withParams(WelcomeComponent);
        const HeaderComponentWithNavigation=withNavigation(HeaderComponent)
        const ListTodosComponenetWithNavigation=withNavigation(ListTodosComponent)
        const TodoComponentWithParamsAndNavigation=withParams(withNavigation(TodoComponent));
    
        return(
            <div className="TodoApp">
               
               <Router>
               <HeaderComponentWithNavigation/>
                    
                  <Routes>
                    <Route path="/" element={<LoginComponentWithNavigation/>}/>
                    <Route path="/login" element={<LoginComponentWithNavigation/>} />
                    {/* <Route path="/welcome" element={<WelcomeComponent/>} /> */}
                    <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams/></AuthenticatedRoute>}/>
                    <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponenetWithNavigation/></AuthenticatedRoute>}></Route> 
                    {/* <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent/></AuthenticatedRoute>}/> */}
                    <Route path="/todos/:id" element={<AuthenticatedRoute><TodoComponentWithParamsAndNavigation/></AuthenticatedRoute>}></Route>
                    <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>  
                    <Route path="*" element={<ErrorComponent/>}/>  
                    
                  </Routes>
                    <FooterComponent/>
                </Router> 
             
            
            {/* <LoginComponent/>
            <WelcomeComponent/> */}
        </div>
        )

    }
}

// function ShowValidCredentials(props){
//     if(props.hasLoginFailed){
//         return  <div>Invalid Credentials</div>
               
//     }
//     else{
//         return <div>Login Successful</div>
                
//     }
// }

export default TodoApp;