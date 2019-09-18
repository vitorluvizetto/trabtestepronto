
import React from 'react';

export default class SearchTableClient extends React.Component {

    render() {
        return <div>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td >Nome</td>
                    <td >Tipo</td>
                    <td>Valor</td>
                    <td>Estoque</td>
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
                    </tr>
                ))}
            </tbody>
             
        </table>
            
            
        </div>
    }
}

export { SearchTableClient };

