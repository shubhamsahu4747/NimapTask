import React, { Component } from 'react'


export default class task extends Component {
    constructor(props) {
      super(props);
      this.state = {
        content: "",
        DataisLoaded:false
    };
    }
componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((json)=>{
        this.setState({
            item:json,
            DataisLoaded:true
        });
    })
}
render(){
    const {DataisLoaded,item} =this.state;
    if(!DataisLoaded) return<div>
        <h1>Please Wait some time..</h1>
    </div>;
function deletetask(id){
    fetch(`http://jsonplaceholder.typicode.com/todos/${id}`,{
    method:'DELETE'
}).then((result)=>{
    result.json().then((res)=>{
        
    
    })
})
}
    return(
        <div className='app'>
            <table className="table">
                
             <thead>
               <tr>
               <th scope="col">id</th>
               <th scope="col">Item</th>
               <th scope="col">Status</th>
               <th scope="col" className='action'>Action</th>
               </tr>
           </thead>
           </table>
            
        {
          item.map((item) =>(
            <table className="table my-3">
            <tbody>
            <tr key={item.id}>
              <th scope="row" > { item.id }</th>
              <td s>{ item.completed } </td> 
              <td className='item'>{ item.title } </td>
              <th><button onClick={ () =>deletetask(item.id) } className="btn btn-danger">Delete</button></th>
            </tr>
             </tbody>
             </table>   
                    /*<ol  >
                     { item.id } 
                     { item.title } 
                     { item.completed } 
                    </ol>*/
                            ))
                        } 
        </div>
    );
}


}

