
import React, { Component } from 'react';
import './counter.css'

class Counter extends Component{

  constructor(){
    super()//super is used to make sure that 'this' is aailable in the next line
    this.state={
      //define a JS "Object" here with intial value set to as 0
      counter:0
    }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement .bind(this);
    this.reset=this.reset.bind(this);
 
  }

  render() {
    return (
      <div className="ounter">
        {/* unxcomment the below line to practice*/}
        {/* <LearningComponents></LearningComponents> */}
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <span className='count'>{this.state.counter}</span>
        <div>
          <button className='reset' onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }

  reset(){
    this.setState(
      {counter:0}
    );
  }

  increment =(by) =>{  
    // console.log(`Increment from parent by = ${by}`);

      this.setState(
        (prevState)=>{
          return {counter:prevState.counter + by}
        }
      );
    }
  decrement =(by) =>{  
      // console.log(`Increment from parent by = ${by}`);
  
        this.setState(
          (prevState)=>{
            return {counter:prevState.counter - by}
          }
        );
  }

}



class CounterButton extends Component{
  //define an initial stete in construtor
  //state of component:0 inside the cnonstructor
  constructor(){
    super()//super is used to make sure that 'this' is aailable in the next line
    // this.state={
    //   //define a JS "Object" here with intial value set to as 0
    //   counter:0
    // }
    // this.increment=this.increment.bind(this);
    // this.decrement=this.decrement.bind(this);
  }
  render () { 
    //const style={fontSize: "50px",padding: "15px 30px"};

    return( <div className="Counter">
       <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
       <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      
      </div>
    );
  }
//   increment =() =>{ 
// //  increment =() =>{//update the state of constructor inside function by 1

//   //console.log('increment');
//   //to make 'this' available inside the function we need to bind the function with component 
//   //this.state.counter++; //bad practice

//   this.setState(
//     {
//       counter:this.state.counter+ this.props.by
//     }
//   );

//   this.props.incrementMethod(this.props.by);

//   }

//   decrement =() =>{ 
//       this.setState(
//         {
//           counter:this.state.counter - this.props.by
//         }
//       );
    
//       this.props.decrementMethod(this.props.by);
    
//       }


}
// Counter.defaultProps={
//   by:1
// }

export default Counter;