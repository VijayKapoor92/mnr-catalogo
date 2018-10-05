import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import classNames from "classnames";

const styles = theme => ({
    bold: {
        fontWeight: 'bold'
    },
    subheading: {
        fontSize: 14,
        color: '#757575'
    },
    prefix: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    font10: {
        fontSize: 10
    },
    priceWpromotion: {
        fontSize: 14,
        fontWeight: 'bold'
    },
});

export const
    Title = withStyles(styles)(({align, classes, text, noWrap, bold}) =>
        <Typography
            align={align}
            variant="title"
            className={bold && classes.bold}
            noWrap={noWrap}
        >
            {text}
        </Typography>
    ),
    SubHeading = withStyles(styles)(({align, classes, text, noWrap, bold}) =>
        <Typography
            align={align}
            variant="subheading"
            className={classNames(
                classes.subheading,
                bold && classes.bold
            )}
            noWrap={noWrap}
        >
            {text}
        </Typography>
    ),
    Prefix = withStyles(styles)(({classes, text, font}) => {
        let nFont = 0;
        if (nFont === 10)
            nFont = classes.font10;
        return (
            <span className={classNames(
                classes.prefix,
                font && nFont
            )}>
                {text}&nbsp;
            </span>
        )
    }),
    PriceValue = withStyles(styles)(({classes, value, promotion}) =>
        <span className={
            promotion
                ? classes.priceWpromotion
                : classes.bold
        }>
            {value}
        </span>
    )
;