
import React from 'react';
import axios from 'axios';
import ProdutoForm from './ProdutoForm';
import ProdutoTable from './ProdutoTable';
import MenuView from '../Menu/MenuView';
import { Link } from 'react-router-dom';

export default class ProdutoView extends React.Component {
    constructor() {
        super();
        this.state = {
            carregar: true,
            clienteParaEditar: null,
            show: false,
            trocaTela: "", trocatelaEsconder: true
        };
    }

    listar() {
        axios.get("/api/produtos/").then(
            (retorno) => this.setState({
                carregar: false,
                produtos: retorno.data
            })
        );
    }
    apagar(produto) {
        axios.delete(`/api/produtos/${produto.id}`).then(
            () => this.listar()
        );
    }

    cadastrar(produto) {
        axios.post("/api/produtos/", produto).then(
            () => this.listar()
        );
    }

    atualizar(produto) {
        axios.put("/api/produtos/" + produto.id, produto).then(
            () => this.listar()
        );
    }

    componentDidMount() {
        document.title = "Produtos"

        this.listar();
    }

    editar(produto) {
        this.setState({
            clienteParaEditar: produto
        });
    }


    esconderForm() {
        this.setState({
            show: !this.state.show
        })
    }

    trocaTela() {
        this.setState({ trocaTela: "Voltar" })
        this.setState({ trocatelaEsconder: false })
    }
    render() {
        return <div>
            {this.state.trocatelaEsconder ? <div>
                <MenuView />

                <br /><br />
                {this.state.carregar ? "Carregando ..." :
                    <ProdutoTable
                        itens={this.state.produtos}
                        onEditar={(produto) => this.editar(produto)}
                        onApagar={(produto) => this.apagar(produto)}
                    />}
                <br />
                <button onClick={() => this.esconderForm()} variant="contained">
                    <strong> Abrir formulário de Cadastro </strong>
                </button>
                <br />
                {this.state.show ? <div><ProdutoForm
                    key={this.state.clienteParaEditar ?
                        this.state.clienteParaEditar.id : "0"}
                    editar={this.state.clienteParaEditar}
                    onCadastrar={(produto) => this.cadastrar(produto)}
                    onAtualizar={(produto) => this.atualizar(produto)}
                    onCancelar={() => this.setState({ clienteParaEditar: null })}
                />
                </div> : ""}
                <br />
                <button onClick={() => this.trocaTela()} variant="contained">
                    <strong> Voltar </strong>
                </button>
                <br />
            </div>

                : ""}

            <p>
                <Link to="/login">Logout</Link>
            </p>
            {this.state.trocaTela == "Voltar" ? <MenuView /> : ""}
        </div>
    }
}

export { ProdutoView }; 