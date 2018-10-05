import React from 'react';
import PropTypes from 'prop-types';
import CatalogueList from '../CatalogueList';
import {styles} from './styles';
import {withStyles} from "@material-ui/core/styles/index";

const Catalogue = ({classes, catalogue, onMouseEnter, onMouseLeave, mouse}) => (
    <div className={classes.root}>
        <CatalogueList
            catalogue={catalogue}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            mouse={mouse}
        />
    </div>
);

Catalogue.propTypes = {
    catalogue: PropTypes.array.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    mouse: PropTypes.string
};

export default withStyles(styles)(Catalogue);