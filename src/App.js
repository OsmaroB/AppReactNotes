import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { todos } from './todos.json';

class App extends Component {
  constructor(){
    super(); //Para que herede toda la funcionalidad de react OBLIGATORIO
    this.state ={ //This.state te da la posibilidad de crear el estado del componente
      //Estamos haciendo un estado de aplicacion como objetos 
      //Detallamos el estado de los datos en general SE ADMINISTRA EN MEMORIA
      todos: todos // Declaramos un estado llamado todos y recolectamos los valores traidos del json todos
    };
    //Enlazamos la funcion para que la reconozca react
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  //Para poder traer la informacion de TodoForm se tiene que hacer un metodo que se encarge de esto
  handleAddTodo(todo){//Este metodo tiene una tarea como parametro
    this.setState({//Modificamos el estado en el estado o actualizarlo agregandole esta tarea que llega ala funcion
      //Actualizamos el estado de la aplicacion
      todos: [...this.state.todos, todo]//Tomamos el arreglo todo y le damos una union del estado actual de la tarea con la nueva tarea
    });
  }

  //Agregamos funcion para eliminar una tarea
  removeTodo(index,todo){
    if(window.confirm('Are you sure you want to delete it?')){
      this.setState({
        todos: todo.filter((e,i)=>{
          return i !==index
        })
      });
    }
  }

  render(){
    const todos = this.state.todos.map((todo,i) =>{// La funcion map recorre uno a uno cada elemento dentro del arreglo de objetos
        //En la linea de arriba decimos devuelve la tarea y el indice de la tarea osea el contenido de todos mas la i
        return(
          <Todo
          title = {todo.title}
          priority = {todo.priority}
          description = {todo.description}
          responsible = {todo.responsible}
          index = {i}
          todos = {this.state.todos}
          onDeleteTodo={this.removeTodo}
          />  
        )
        
    })
    return (
      <div className="App">
            <Navigation
            titulo ="Task"
            contenido = {this.state.todos.length}
            />
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />  
              <TodoForm onAddTodo={this.handleAddTodo}/>{/*El componente recibe el metodo o funcion llamado handleAddTodo
              Le agregamos una propiedad llamada onAddTodo y esa recibira el metodo handleAddTodo
              */}
              </div>
              <div className="col-md-9">
                <div className="row">
                  { todos }{/**Aca recivimos el retorno de la constante todos que se recorre arriba*/}
                </div>
              </div>
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
