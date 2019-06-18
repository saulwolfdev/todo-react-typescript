import * as React from "react";
import {Itask} from "./Task"
class TaskForm extends React.Component<ITaskFormProps,ITaskFormState>{
     constructor(props:ITaskFormProps){
         super(props)
         this.state={
             title:"",
             description:""
         }
     }
    handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //this.props.addANewTask()
        const newTask:Itask={
            id:1,
            title:"",
            description:"",
            completed:false
        }
        console.log("guardando")
    }
handleInputChange(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
    e.preventDefault()
    console.log(e.target)

}
    render() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.handleNewTask(e)} className="form-data">
                    <input type="text" 
                    onChange={e=>this.handleInputChange(e)}
                    name="" id="" className="input" placeholder="ingrese" />
                    <textarea className="text-area"
                    onChange={e=>this.handleInputChange(e)}
                    placeholder="texto"></textarea>
                    <button type="submit" className="button">Enviar</button>
                </form>
            </div>
        )
    }
}
interface ITaskFormProps{
    addANewTask:(task:Itask)=> void;
}
interface ITaskFormState{
    title:string
    description:string
}
export default TaskForm
