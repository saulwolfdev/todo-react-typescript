import * as React from "react"
import {Itask} from "./Task";
class TaskList extends React.Component<any,any> {

    render():JSX.Element[] {
        return this.props.tasks.map((task:Itask, i:number)=>{
            return(
                <div className="card" key={task.id}>
                    <h3>{task.title}</h3>
                    <div className="description">
                        {task.description}
                    </div>
                    <button onClick={()=>this.props.deleteAtask(task.id)}>
                        delete
                    </button>
                </div>
            )
        })
    }
}
interface ITaskListProps{
    tasks:Itask[]
    deleteATask:(id:number)=>void;
}
export default TaskList;