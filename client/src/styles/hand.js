import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    dealerHand: {
        display: 'block',
    }, 
    playerHand: {
        marginTop: '70px'
    },
    total: {
        color: '#fff',
        marginBottom: theme.spacing(2)
    }
}));