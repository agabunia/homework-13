import { PureComponent } from 'react';


class ToDoTask extends PureComponent {
  render() {
    const {id, name, action, button} = this.props

    console.log('Render ToDo-task ' + id)

    return(
      <div className="task">
         <p className='task-name'> {name} </p>
         <div className="task-bottom">
           <button onClick={() => action(id)}> {button} </button>
           <p className='task-no'> No: {id} </p>
         </div>
      </div>
    )    
  }
}





export default ToDoTask