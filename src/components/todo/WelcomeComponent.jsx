import React,{Component} from "react";
import { Link} from 'react-router-dom'
import HelloWorldService from "../../api/todo/HelloWorldService.js";
class WelcomeComponent extends Component{
    
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        this.state={
            welcomeMessage:''
        }
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
        this.handleError=this.handleError.bind(this)
        
    }

    render(){
        // const user= this.props.params!=undefined ? this.props.params.name : "Khushboo".toString()
        const user = this.props.params.name        
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    
                    Hello {user}. You can manage your todos <Link to="/todos">here</Link>
            
                </div>
                <div className="container">
                    CLick on the below button to see customized welcome msg.
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Welcome message</button>
                </div>
                <div className="container">
                    <h3>Your Customized message.</h3>
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService()
        // .then(response=>this.handleSuccessfulResponse(response))
        // .catch()

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response=>this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService( this.props.params.name )
        .then(response=>this.handleSuccessfulResponse(response))
        .catch(error=>this.handleError(error))
    }
    handleSuccessfulResponse(response){
        console.log(response);
        // this.setState({welcomeMessage:response.data})
        this.setState({welcomeMessage:response.data.msg})
    }
    
    handleError(error){
        console.log(error);
        let errorMessage='';
        if(error.message)
            errorMessage+=error.message
        
        if(error.response && error.response.data){
            errorMessage+=error.message
        }
        this.setState({welcomeMessage: errorMessage})
    }
}


export default WelcomeComponent