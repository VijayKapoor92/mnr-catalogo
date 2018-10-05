import React from 'react';
import PropTypes from 'prop-types';
import CatalogueList from '../CatalogueList';
import {styles} from './styles';
import {withStyles} from "@material-ui/core/styles/index";

const Catalogue = ({classes, catalogue}) => (
    <div className={classes.root}>
        <CatalogueList catalogue={catalogue}/>
    </div>
);

Catalogue.propTypes = {
    catalogue: PropTypes.array.isRequired
};

export default withStyles(styles)(Catalogue);