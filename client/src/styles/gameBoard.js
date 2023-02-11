import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    hitBtn: {
        marginInlineEnd: theme.spacing(2),
        backgroundColor: '#fff'
    },
    standBtn: {
        backgroundColor: '#fff'
    },
    btnsContainer: {
        marginTop: theme.spacing(2),
    },
    handsContainer: {
        marginTop: theme.spacing(2),
        minHeight: 'calc(80vh - 70px)'
    }
}));