import * as React from "react";
import TaskForm from "./TaskForm"
import {Itask} from "./Task"
export class App extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props); 
        this.state={
            tasks:[]
        }
    }
    addANewTask(task:Itask):void{
        this.setState({
            tasks:[...this.state.tasks, task]
        })
    }
    render(){
        return(
            <div className="container">
            <h1 className="contaniner">
                        {this.props.title}
            </h1>
              <TaskForm AddANewTask={this.addANewTask}/>
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