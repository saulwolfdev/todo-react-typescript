import * as React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList"
import {Itask} from "./Task";
export class App extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props); 
        this.state={
            tasks:[]
        }
    this.deleteATask=this.deleteATask.bind(this)
    }
addANewTask(task:Itask){
        this.setState({
            tasks:[...this.state.tasks, task]
        },()=>console.log(this.state))
    }
deleteATask(id:number){
    const tasks:Itask[]=this.state.tasks.filter(
        (task:Itask)=>task.id!==id
    )
    //es lo mismo
    //this.setState({tasks:tasks})
    //otra opcion
    this.setState({tasks:tasks})
    console.log("this is a tasks=>",tasks)
    console.log("this is a id =>",id)
}
    render(){
        return(
            <div className="container">
            <h1 className="contaniner">
                        {this.props.title}
            </h1>
              <TaskForm addANewTask={this.addANewTask.bind(this)}/>
              <div className="container">
                  <TaskList 
                  tasks={this.state.tasks}
                  deleteAtask={this.deleteATask}
                  />
              </div>
            </div>
        )
    }
}
interface IProps{
    title:string;
}
interface IState{
    tasks:Itask[]
}