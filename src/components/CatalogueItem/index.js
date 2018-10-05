import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import { styles } from './styles';
import {withStyles} from '@material-ui/core/styles';

const CatalogueItem= ({classes, image, title, subheading, price, promotion}) => {
    return (
        <Grid item lg={3} zeroMinWidth style={{position: 'relative'}}>
            {promotion.length > 0 && (
                <MonetizationOn style={{position: 'absolute', top: 20, right: 20, zIndex: 1200, fontSize: 28, color: 'red'}}/>
            )}
            <div style={{padding: 20}}>
                <div className={classes.paper}>
                    {/*<div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(900, 900, 900, .9)', zIndex: 1000}} />*/}
                    <div className={classes.imageItem} style={{backgroundImage: `url(${image})`}}/>
                    <div className={classes.content}>
                        <Typography align="center">{title}</Typography>
                        <Typography align="center" style={{fontSize: 12, color: '#757575'}}>{subheading}</Typography>
                        {promotion ? (
                            <Fragment>
                                <Typography align="center" noWrap style={{fontSize: 11, color: '#BDBDBD', textDecoration: 'line-through'}}>De: R${price}</Typography>
                                <Typography align="center" noWrap>Por: R${promotion}</Typography>
                            </Fragment>
                        ) : (
                            <Typography align="center" noWrap>R${price}</Typography>
                        )}
                    </div>
                </div>
            </div>
        </Grid>
    )
};

CatalogueItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    promotion: PropTypes.string
};

export default withStyles(styles)(CatalogueItem);