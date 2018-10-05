import React, {Fragment} from 'react';
import classNames from "classnames";
import { Prefix, PriceValue } from '../Typos';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {blue} from "@material-ui/core/colors/index";

const styles = theme => ({
    promotionContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    promotion: {
        fontWeight: 'bold'
    },
    latePrice: {
        color: '#BDBDBD',
        textDecoration: 'line-through',
        textAlign: 'center'
    },
    newPrice: {
        textAlign: 'center',
        fontSize: 24
    },
    colorBlue: {
        color: blue[700]
    },
    price: {
        fontSize: 24,
        textAlign: 'center'
    },
    prefix: {
        fontSize: 12,
        fontWeight: 'bold'
    },
});

const OldPrice = withStyles(styles)(({classes, prefix, price}) =>
    <div className={classes.latePrice}>
        <Prefix text={prefix} font={10}/>
        <PriceValue text={price} promotion />
    </div>
);

const NewPrice = withStyles(styles)(({classes, prefix, price}) =>
    <div className={classNames(classes.newPrice, classes.colorBlue)}>
        <Prefix text={prefix} font={10} />
        <PriceValue text={price}/>
    </div>
);

const Price = ({classes, prefix, price, promotion, promotionPrice}) =>
    <Fragment>
        {promotion ? (
            <Typography component="div" className={classes.promotionContainer}>
                <OldPrice prefix={prefix} price={price}/>
                <NewPrice prefix={prefix} price={promotionPrice}/>
            </Typography>
        ) : (
            <Typography noWrap className={classNames(classes.price, classes.colorBlue)}>
                <span className={classes.prefix}>R$&nbsp;</span>
                <span style={{fontWeight: 'bold'}}>{price}</span>
            </Typography>
        )}
    </Fragment>
;

export default withStyles(styles)(Price);