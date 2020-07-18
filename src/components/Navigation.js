import React, { Component } from 'react';//Estructura de ES6


class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light p-30">
                <a className="text-dark">
                    {this.props.titulo}
                    <span className="badge badge-pill badge-dark ml-2">
                        {this.props.contenido}
                    </span>
                </a>
            </nav>
            
        )
    }
}



export default Navigation;