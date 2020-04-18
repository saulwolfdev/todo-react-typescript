import * as React from "react";
import {Itask} from "./Task";

interface ITaskFormProps{
    addANewTask:(task:Itask)=> void;
}
interface ITaskFormState{
    title:string;
    description:string;
}
class TaskForm extends React.Component<ITaskFormProps,any>{
     constructor(props:ITaskFormProps){
         super(props)
         this.state={
             title:"",
             description:""
         }
     }

getCurrenTimesTamp():number{
    //primera opccion
    //return new Date().getTime()
    //segunda opcion
    const date:Date=new Date()
    return date.getTime()
}
handleNewTask(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask:Itask={
            id:this.getCurrenTimesTamp(),
            title:this.state.title,
            description:this.state.description,
            completed:false
        }
         this.props.addANewTask(newTask)
         this.setState({title:"",description:""})
        console.log(newTask)
    }
handleInputChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    e.preventDefault()
    const {value,name}=e.target
    this.setState({
        [name]:value
    })
}
    render() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.handleNewTask(e)} className="form-data">
                    <input 
                        type="text"
                        name="title" 
                        onChange={e=>this.handleInputChange(e)}
                        className="input" 
                        placeholder="ingrese"
                        value={this.state.title}
                        />
                    <textarea 
                        className="text-area"
                        name="description"
                        onChange={e=>this.handleInputChange(e)}
                        placeholder="texto"
                        value={this.state.description}
                        ></textarea>
                    <button 
                        type="submit" 
                        className="button">Enviar</button>
                </form>
            </div>
        )
    }
}

export default TaskForm
