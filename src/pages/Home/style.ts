import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#F0F8FF',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '100px'
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '24px'
        },
    },
    title: {
        fontSize: '110px',
        color: '#fff',
        marginBottom: '100px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '54px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '42px'
        },
    },

}))
