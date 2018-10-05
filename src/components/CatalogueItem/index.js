import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import { styles } from './styles';
import {withStyles} from '@material-ui/core/styles';

const CatalogueItem= ({classes, image, title, subheading, price, promotion}) => {
    return (
        <Grid item xs={4} zeroMinWidth style={{position: 'relative'}}>
            {promotion.length > 0 && (
                <MonetizationOn style={{position: 'absolute', top: 10, right: 10, zIndex: 1200, fontSize: 28, color: 'red'}}/>
            )}
            <div style={{margin: 20}}>
                <div className={classNames(classes.paper, classes.paperDisplay)}>
                    {/*<div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(900, 900, 900, .9)', zIndex: 1000}} />*/}
                    {/*<div className={classes.imageItem} style={{backgroundImage: `url(${image})`}}/>*/}
                    <img className={classes.imageItem} src={image} alt={title} />
                    <div className={classNames(classes.content, classes.contentDisplay)}>
                        <Typography align="center" variant="title" noWrap>{title}</Typography>
                        <Typography align="center" variant="subheading" className={classes.subheading}>{subheading}</Typography>
                        {promotion ? (
                            <Fragment>
                                <Typography component="div" style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                                    <div style={{fontSize: 14, color: '#BDBDBD', textDecoration: 'line-through', textAlign: 'center'}}><span style={{fontSize: 12}}>R$&nbsp;</span>{price}</div>
                                    <div style={{textAlign: 'center', fontSize: 24}}><span style={{fontSize: 12}}>R$&nbsp;</span>{promotion}</div>
                                </Typography>
                            </Fragment>
                        ) : (
                            <Typography align="center" noWrap className={classes.price}><span style={{fontSize: 12}}>R$&nbsp;</span>{price}</Typography>
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