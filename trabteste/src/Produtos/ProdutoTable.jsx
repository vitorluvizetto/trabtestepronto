
import React from 'react';

export default class ProdutoTable extends React.Component {

    render() {
        return <div>
        <table >
            <thead>
                <tr>
                    <th>Id</th>
                    <th >Nome</th>
                    <th >Tipo</th>
                    <th >Valor</th>
                    <th >Estoque</th>
                    <th>Escolha</th>
                </tr>
            </thead>
            <tbody>
                {this.props.itens.map((produto) => (
                    <tr key={produto.id}>
                        <td >{produto.id}</td>
                        <td >{produto.nome}</td>
                        <td >{produto.tipo}</td>
                        <td >{produto.valor}</td>
                        <td >{produto.estoque}</td>
                        <td ><button type="button" onClick={() => this.props.onEditar(produto)}>Editar</button></td>
                        <td><button type="button" onClick={() => this.props.onApagar(produto)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
            
            
        </div>
    }
}

export { ProdutoTable }; 
