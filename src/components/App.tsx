import * as React from "react";
import TaskForm from "./TaskForm";
import {Itask} from "./Task";
import TaskList from "./TaskList";
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
	
    public deleteATask(id: number): void {
        const tasks: Itask[] = this.state.tasks.filter(
            (task: Itask) => task.id !== id
        );
        this.setState({ tasks });
    }
    render(){
        return(
            <div className="container">
            <h1 className="contaniner">
                        {this.props.title}
            </h1>
              <TaskForm addANewTask={this.addANewTask.bind(this)}/>
			  <TaskList
                                    tasks={this.state.tasks}
                                    deleteATask={this.deleteATask.bind(this)}
                                />
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