import React, { Component } from 'react'
import axios from 'axios';
export default class RemoveTask extends Component{
    state={
        users:[]
    }

   componentDidMount(){
    axios.get(`http://jsonplaceholder.typicode.com/todos`)
    .then(res=>{
        const users=res.data;
        this.setState({users});
    })
   } 
  deleteTask(){
    axios.delete(`http://jsonplaceholder.typicode.com/todos`)
    .then(res=>{
        const users=res.data;
        this.setState({users});
    })
  }
render(){
    const {users} =this.state
    return(<div>        
            <ul>
            {
            this.state.users.map(users=>(
            <li>
                {users.name}
                  <button onClick={ () => this.deleteTask(users.id) } >Delete</button>
             </li>))
        
            }
            </ul>
            </div>);
}
   }