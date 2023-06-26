import { Component } from "react";
import ToDoTask from "./ToDoTask";
import DoneLogo from '../assets/done.svg';
import ToDoLogo from '../assets/to-do.svg';
import DoneTask from "./DoneTask";


class List extends Component {
    
    state = {
        inputValue: '',
        newTasks: [
            {id: 1, name: 'Skillwill'}, 
        ],
        doneTasks: [
            {id: 99, name: 'Sleep'}
        ]
    }
    
    onChange = (event) => {
        const value = event.target.value
        this.setState({
            inputValue: value
        })
    }

    addTask = (event) => {
        event.preventDefault()

        const newTask = {
            id: this.state.newTasks.length + 1, 
            name: this.state.inputValue
        }

        this.setState({
            newTasks: [...this.state.newTasks, newTask],
            inputValue: ''
        })
    }

    moveToDone = (id) => {
        const newTasks = this.state.newTasks.filter((task) => task.id !== id)
        const doneTasks = this.state.newTasks.filter((task) => task.id === id)

        this.setState({
            newTasks: [...newTasks],
            doneTasks: [...this.state.doneTasks, ...doneTasks]
        })
    }

    moveToDo = (id) => {
        const doneTasks = this.state.doneTasks.filter((task) => task.id !== id)
        const newTasks = this.state.doneTasks.filter((task) => task.id === id)

        this.setState({
            doneTasks: [...doneTasks],
            newTasks: [...this.state.newTasks, ...newTasks]
        })
    }

    removeTask = (id) => {
        const doneTasks = this.state.doneTasks.filter((task) => task.id !== id)

        this.setState({
            doneTasks
        })
    }


    render() {
        return (
            <div className="background">
                <div className="users">
                    <div className="form">
                        <form className="user-form" onSubmit={this.addTask}>
                            <input type="text" onChange={this.onChange} value={this.state.inputValue} placeholder="e.g. Do Homework" />
                            <button type="submit">Add Task</button>
                        </form>
                    </div>

                    <div className="lists">
                        <div className="section">
                            <div className="image">
                                <img src={ToDoLogo} alt='text' />
                            </div>
                            {this.state.newTasks.map((newTask) => (
                                <ToDoTask key={newTask.id} id={newTask.id} name={newTask.name} button={"Done"} action={this.moveToDone} />
                            ))}
                        </div>

                        <div className="section">
                            <div className="image">
                                <img src={DoneLogo} alt='text' />
                            </div>
                            {this.state.doneTasks.map((doneTask) => (
                                <DoneTask key={doneTask.id} id={doneTask.id} name={doneTask.name} buttonOne={"Remove"} buttonTwo={"To Do"} actionOne={this.removeTask} actionTwo={this.moveToDo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List