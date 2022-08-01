import React,{Component} from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
        
        this.handleChange=this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
        // this.sample=this.sample.bind(this)
    }
    handleChange(event){
        // console.log(this.state);
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }
    // handleUsernameChange(event){
    //     console.log(event.target.name);
    //     this.setState(
    //         {
    //             [event.target.name]:event.target.value
    //         }
    //     )
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             password:event.target.value
    //         }
    //     )
    // }

    loginClicked(){
        // //in28minutes,dummy
        // if(this.state.username==='in28minutes' && this.state.password==='dummy'){
        //     // console.log('Succesfull')
        //     // this.props.navigate(`/welcome`)
        //     // AuthenticationService.registerSuccessfulLogin()
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     // AuthenticationService.isUserLoggedIn()
        //     this.props.nav(`/welcome/${this.state.username}`)
        //     // this.setState({showSuccessMessage:true,
        //     //         hasLoginFailed:false})
        // }
        // else{
        //     this.setState({showSuccessMessage:false,
        //             hasLoginFailed:true })
        //     // console.log('Failed')
        // }

        // AuthenticationService.
        // executeBasicAuthenticationService(this.state.username,this.state.password)
        // .then(()=>{
        //         AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //         this.props.nav(`/welcome/${this.state.username}`)
        //     }).catch(()=>{
        //             this.setState({showSuccessMessage:false,
        //                 hasLoginFailed:true })        
        //         }
        // )
        
        AuthenticationService.
        executeJwtAuthenticationService(this.state.username,this.state.password)
        .then((response)=>{
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
                this.props.nav(`/welcome/${this.state.username}`)
            }).catch(()=>{
                    this.setState({showSuccessMessage:false,
                        hasLoginFailed:true })        
                }
        )
        
        // console.log(this.state)
    }
    render(){
        return(
            // UserName: <input type="text" name="username">UserName</input>
            <div>

                {/* <ShowValidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowValidCredentials> */}
                {/* {this.sample()}*/}
                <h1>Login</h1> 
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Suceesful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
    // sample(){
    //     return <div>Hello</div>
    // }

}

export default LoginComponent