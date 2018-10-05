import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CatalogueItem from '../CatalogueItem';

const CatalogueList = ({classes, catalogue, onMouseEnter, onMouseLeave, mouse}) => {
    return (
        <Grid container spacing={24}>
            {catalogue.map(({id, nm_produto, descricao, vl_unitario, vl_promocional, nm_foto}) => (
                <CatalogueItem
                    key={id}
                    image={nm_foto}
                    title={nm_produto}
                    subheading={descricao}
                    price={vl_unitario}
                    promotion={vl_promocional}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    mouse={mouse}
                />
            ))}
        </Grid>
    )
};

CatalogueList.propTypes = {
    catalogue: PropTypes.array.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    mouse: PropTypes.string
};

export default CatalogueList;