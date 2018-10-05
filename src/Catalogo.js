import React, {Component} from 'react';
import Catalogue from './components/Catalogue';
import {getCatalogue} from './catalogue';

class Catalogo extends Component {

    constructor(props){
        super(props);
        this.state = {
            catalogue: [],
            mouse: 'out'
        }
    }

    componentWillMount() {
        const catalogue = getCatalogue();
        this.setState({ catalogue });
    }

    handleMouseEnter = () =>
        this.setState({mouse: 'in'});

    handleMouseLeave = () =>
        this.setState({mouse: 'out'});

    render() {
        const { catalogue, mouse } = this.state;

        return (
            <Catalogue
                catalogue={catalogue}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                mouse={mouse}
            />
        );
    }
}

export default Catalogo;
