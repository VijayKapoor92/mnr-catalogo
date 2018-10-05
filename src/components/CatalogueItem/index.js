import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Title, SubHeading } from '../Typos';
import Price from '../Price';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import { styles } from './styles';
import {withStyles} from '@material-ui/core/styles';

const ItemInfo = withStyles(styles)(({classes, mouse}) =>
    <div className={classNames(classes.itemInfo, mouse === 'in' && classes.itemInfoHover)} />
);

const CatalogueItem= ({classes, image, title, subheading, price, promotion, onMouseEnter, onMouseLeave, mouse}) => {
    return (
        <Grid item xs={4} zeroMinWidth style={{position: 'relative'}}>
            {promotion.length > 0 && (
                <MonetizationOn style={{position: 'absolute', top: 10, right: 10, zIndex: 1200, fontSize: 28, color: 'red'}}/>
            )}

            <div className={classNames(classes.paper, classes.paperDisplay)} onMouseEnter={e => onMouseEnter(e)} onMouseLeave={e => onMouseLeave(e)}>
                <ItemInfo mouse={mouse}/>
                {/*<div className={classes.imageItem} style={{backgroundImage: `url(${image})`}}/>*/}
                <img className={classes.imageItem} src={image} alt={title} />
                <div className={classNames(classes.content, classes.contentDisplay)}>
                    <Title text={title} align="center" noWrap bold/>
                    <SubHeading text={subheading} align="center" bold/>
                    <Price prefix="R$" price={price} promotionPrice={promotion} promotion={promotion}/>
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