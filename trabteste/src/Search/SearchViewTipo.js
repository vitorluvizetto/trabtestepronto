
import MenuView from '../Menu/MenuView';
import React from 'react';
import axios from 'axios';
import SearchFormMetodo from './SearchFormMetodo';
import SearchTable from './SearchTable';

export default class SearchViewTipo extends React.Component {
    constructor() {
        super();
        this.state = { carregar: true, trocaTela: "", trocatelaEsconder: true, show: false, showMetodo: false };
    }



    pesquisarTipo(produto) {
        axios.post("/api/produtos/pesquisar/tipo", produto).then(
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
        this.pesquisarTipo();
    }

    render() {
        return <div> {this.state.trocatelaEsconder ?
            <div>
                <MenuView />
                <br />
                <button className="alignButtonsTables" onClick={() => this.esconderFormCpf()} variant="contained">
                    <strong> Pesquisar por tipo </strong>
                </button>
                <br />

                {this.state.carregar ? "Carregando ..." :
                    <SearchTable
                        itens={this.state.produtos}
                    />}
                <br />


                {this.state.showMetodo ? <SearchFormMetodo onPesquisar={(tipo) => this.pesquisarTipo(tipo)} /> : ""}
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


export { SearchViewTipo }; 