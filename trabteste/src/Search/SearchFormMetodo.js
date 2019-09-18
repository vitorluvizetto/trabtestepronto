
import React from 'react';

export default class SearchFormMetodo extends React.Component {

    constructor(props) {
        super(props);{
            this.state = {
                tipo: ""
            }
        }
    }

    limpar() {
        this.setState({
            tipo: ""
        });
    }
    

    pesquisar() {
        this.props.onPesquisar({
            tipo: this.state.tipo
        });
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
            <h2>Digite um tipo: </h2>
            <label>Tipo</label>
            <input 
                value={this.state.tipo}
                onChange={(tipo) => this.setState({
                    tipo: tipo.target.value
                })}
            />
            <br /><br />
            <button onClick={() => this.pesquisar()} >Confirmar</button>
            <button onClick={() => this.limpar()} >Limpar</button>
        </div>
        
    }
}

export { SearchFormMetodo };