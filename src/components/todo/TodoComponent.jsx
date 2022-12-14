import React,{Component} from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.validate=this.validate.bind(this)

    }
    componentDidMount(){
        
        if(this.state.id===-1){
            return
        }

        let username=AuthenticationService.getLoggedInUserName()
        TodoDataService.retriveTodo(username,this.state.id)
        .then(response=>this.setState({
            description:response.data.description,
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }))
    }

    validate(values){
        let errors={}
        
        if(!values.description){
            errors.description='Enter a description'
        }
        else if(values.description.length<5){
            errors.description='Enter atleast 5 characters in description.'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate='Enter a valid target date'
        }
        return errors;
    }
    onSubmit(values){
        let username=AuthenticationService.getLoggedInUserName()
        let todo={
            id:this.state.id,
            description:values.description,
            targetDate:values.targetDate
        }
        if(this.state.id===-1){
            TodoDataService.createTodo(username,todo)
            .then(()=> this.props.nav('/todos'))
            console.log(values)
        }
        else{
            TodoDataService.updateTodo(username,this.state.id,todo)
            .then(()=> this.props.nav('/todos'))
            console.log(values)
        }
    }
    render(){
        let {description,targetDate}=this.state
        // let targetDate=this.state.targetDate
        return (
        <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{description,targetDate}}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}
                    >
                        {
                            (props)=>(
                                <Form>
                                    
                                    <ErrorMessage className="alert alert-warning" name="description" component="div"/>
                                    <ErrorMessage className="alert alert-warning" name="targetDates" component="div"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>TargetDate</label>
                                        <Field className="form-control" type="date" name = "targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                                    
                            )
                        }
                    </Formik>                        
                </div>
                     
            </div>
        )
    }

}
export default TodoComponent