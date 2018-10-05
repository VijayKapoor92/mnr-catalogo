import {MNR_CARD_HEIGHT} from "../../utils/constants";

export const styles = theme => ({
    paper: {
        position: 'relative',
        width: '100%',
        height: MNR_CARD_HEIGHT,
        maxHeight: MNR_CARD_HEIGHT,
        overflow: 'hidden',
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    },
    paperDisplay: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start'
    },
    gridItem: {
        padding: theme.spacing.unit * 200,
    },
    imageItem: {
        // height: 230,
        // backgroundSize: '130px 230px',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center'
        width: 130,
        maxWidth: 130,
        objectFit: 'caption'
    },
    content: {
        padding: 3,
        minWidth: 0,
        width: '100%',
        maxWidth: '100%',
        maxHeight: MNR_CARD_HEIGHT,
        height: MNR_CARD_HEIGHT
    },
    contentDisplay: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'space-around',
    },
    subheading: {
        fontSize: 14,
        color: '#757575'
    },
    title: {
        fontSize: 14
    },
    price: {
        fontSize: 24
    }
});