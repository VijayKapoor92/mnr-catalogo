import React, {Component} from 'react';
import Catalogue from './components/Catalogue';
import {getCatalogue} from './catalogue';

class Catalogo extends Component {

    constructor(props){
        super(props);
        this.state = {
            catalogue: []
        }
    }

    componentWillMount() {
        const catalogue = this.getCatalogue();
        this.setState({ catalogue });
    }

    getCatalogue = () => getCatalogue();

    render() {
        const { catalogue } = this.state;

        return (
            <Catalogue catalogue={catalogue} />
        );
    }
}

export default Catalogo;
