import React, { Component } from 'react';
import { Header } from '../styles/Cabecalho';
import person from '../img/person.png';

class Cabecalho extends Component {
    render() {
        return (
            <Header>
                <nav>
                    <h1>Facebook.</h1>
                    <div>
                        <h5> Meu Perfil</h5>
                        <img src={person} alt="Person"></img>
                    </div>
                </nav>
            </Header>
        )
    }
}

export default Cabecalho;
