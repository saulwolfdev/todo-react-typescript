import * as React from "react";
class TaskForm extends React.Component<any, any>{

    handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("guardando")
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.handleNewTask(e)} className="form-data">
                    <input type="text" name="" id="" className="input" placeholder="ingrese" />
                    <textarea className="text-area" placeholder="texto"></textarea>
                    <button type="submit" className="button">Enviar</button>
                </form>
            </div>
        )
    }
}
export default TaskForm
