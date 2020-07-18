import React, {Component} from 'react';

class Todo extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onDeleteTodo(this.props.index,this.props.todos);
    }
    render(){
        return(
            <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-header">
                <h3>{this.props.title}</h3>
                  <span className="badge badge-pill badge-danger ml-2">{this.props.priority}</span>
              </div>
              <div className="card-body">
                <p>{this.props.description}</p>
                <p><mark>{this.props.responsible}</mark></p>
              </div>
              <div className="card-footer">
                  <form className="form-group" onSubmit={this.handleSubmit}>
                  <button 
                  className="btn btn-danger" 
                  type="submit"
                  >Delete</button>{/** Hacemos que react lo reconozca con el bind this y pasamos el indice del arreglo*/}
                  </form>
              </div>
            </div>
          </div>
        )
    }
}

export default Todo;