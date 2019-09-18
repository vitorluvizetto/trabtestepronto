
import React from 'react';
import ProdutoView from '../Produtos/ProdutoView';
import SearchView from '../Search/SearchView';
import SearchViewTipo from '../Search/SearchViewTipo';


const alinhamento = { textAlign: 'center', backgroundColor: '#d3d3d3' }

export default class MenuView extends React.Component {
        constructor() {
                super();
                this.state = {
                        show: true,
                        itemMenu: ""
                };
        }
        hidingMenuToCustomer() {
                this.setState({ show: false })
                this.setState({ itemMenu: "produto" })
        }
        hidingMenuToSearch() {
                this.setState({ show: false })
                this.setState({ itemMenu: "search" })
        }
        hidingMenuToSearchTipo() {
                this.setState({ show: false })
                this.setState({ itemMenu: "searchTipo" })
        }

        componentDidMount() {
                document.title = "Menu"
        }

        render() {
                return <div><div style={alinhamento}>
                        {this.state.show ?
                                <button className="alignButtonsTables" onClick={() => this.hidingMenuToCustomer()} variant="contained">
                                        <strong> Estoque </strong>
                                </button>


                                : ""}
                        {this.state.show ?
                                <button className="alignButtonsTables" onClick={() => this.hidingMenuToSearch()} variant="contained">
                                        <strong> Pesquisa Nome </strong>
                                </button> : ""}

                        {this.state.show ?
                                <button className="alignButtonsTables" onClick={() => this.hidingMenuToSearchTipo()} variant="contained">
                                        <strong> Pesquisa tipo </strong>
                                </button> : ""}


                        {this.state.itemMenu == "produto" ? <ProdutoView /> : ""}
                        {this.state.itemMenu == "search" ? <SearchView /> : ""}
                        {this.state.itemMenu == "searchTipo" ? <SearchViewTipo /> : ""}

                </div>

                </div>
        }
}

export { MenuView }; 
