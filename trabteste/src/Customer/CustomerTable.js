
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class CustomerTable extends React.Component {

    render() {
        return <div><Paper> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell >Nome</TableCell>
                    <TableCell >Tipo</TableCell>
                    <TableCell >Valor</TableCell>
                    <TableCell >Estoque</TableCell>
                    <TableCell>Escolha</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.itens.map((produto) => (
                    <TableRow key={produto.id}>
                        <TableCell >{produto.id}</TableCell>
                        <TableCell >{produto.nome}</TableCell>
                        <TableCell >{produto.tipo}</TableCell>
                        <TableCell >{produto.valor}</TableCell>
                        <TableCell >{produto.estoque}</TableCell>
                        <TableCell >
                            <IconButton onClick={() => this.props.onEditar(produto)}>
                                <EditIcon color="primary">edit_icon</EditIcon>
                            </IconButton>
                            <IconButton onClick={() => this.props.onApagar(produto)}>
                                <DeleteIcon color="error">delete</DeleteIcon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Paper>
            
            
        </div>
    }
}

