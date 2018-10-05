export const styles = theme => ({
    paper: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    },
    gridItem: {
        padding: theme.spacing.unit * 200,
    },
    imageItem: {
        height: 140,
        display: 'block',
        backgroundSize: '130px 100px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    content: {
        padding: 16
    }
});