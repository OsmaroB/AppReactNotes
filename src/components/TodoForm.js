import React,{Component} from 'react';


class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'Low'
        };
        //Agregamos que el evento o funcion sea escuchado
        //Practicamente se esta diciendo que esta funcion le pertenece a este componente 
        this.handleInput = this.handleInput.bind(this);
        //Vonvemos a enlazar otra funcion 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){//Creamos una funcion que se usara en los eventos de onChange
        //El evento onChange da informacion con el parametro e como que input esta escribiendo
        const {value, name} = e.target;//e.target pone las propiedades del componente en las llaves de especifica la propiedad
        this.setState({//Este this.setState te permite alterar los datos adentro del estado del componente
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);//Ocupamos la propiedad onAddTodo recolectada del lugar adonde se coloca la etiqueta
        //<TodoForm/> y recibe de parametro el arreglo de objetos json (Los estados en general declarados en el componente)
        
    }

    render(){
        return(
            <div className="card">
                <form action="" className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        onChange= {this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        name="responsible"
                        className="form-control"
                        placeholder="Responsible"
                        onChange= {this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        onChange= {this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select 
                        name="priority"
                        className="form-control"
                        onChange={this.handleInput}
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;