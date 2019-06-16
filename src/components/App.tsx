import * as React from "react";
import TaskForm from "./TaskForm"
export class App extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            tasks:[]
        }
    }
    
    render(){
        return(
            <div className="container">
            <h1 className="contaniner">
                        {this.props.title}
            </h1>
            <TaskForm/>
            </div>
        )
    }
}
interface IProps{
    title:string;
}
interface IState{
    tasks:[]
}