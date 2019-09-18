
import MenuView from '../Menu/MenuView';
import React from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';
import SearchTableClient from './SearchTableClient';

export default class SearchView extends React.Component {
    constructor() {
        super();
        this.state = { carregar: true, trocaTela: "", trocatelaEsconder: true, show: false, showMetodo: false };
    }


    pesquisarNome(produto) {
        axios.post("/api/produtos/pesquisar/nome", produto).then(
            (retorno) => this.setState({
                carregar: false,
                produtos: retorno.data
            })
        );
    }


    trocaTela() {
        this.setState({ trocaTela: "Voltar" })
        this.setState({ trocatelaEsconder: false })
    }


    esconderForm() {
        this.setState({
            show: !this.state.show
        })
    }

    esconderFormCpf() {
        this.setState({
            showMetodo: !this.state.showMetodo
        })
    }


    componentDidMount() {
        document.title = "Pesquisar"
        this.pesquisarNome();
    }

    render() {
        return <div> {this.state.trocatelaEsconder ?
            <div>
                <MenuView />
                <br />
                <button className="alignButtonsTables" onClick={() => this.esconderForm()} variant="contained">
                    <strong> Pesquisar por nome </strong>
                </button>
                <br />
                
                {this.state.carregar ? "" :
                    <SearchTableClient
                        itens={this.state.produtos}
                    />}
                

                {this.state.show ? <SearchForm onPesquisar={(produto) => this.pesquisarNome(produto)} /> : ""}
                <br />
                <button onClick={() => this.trocaTela()} variant="contained">
                    <strong> Voltar </strong>
                </button>
                <br />
            </div> : ""}
            {this.state.trocaTela == "Voltar" ? <MenuView /> : ""}
        </div>
    }
}


export { SearchView }; 