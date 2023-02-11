import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '40%',
      height: '30%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      borderRadius: theme.spacing(0.5),
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    },
    submitButton: {
      position: 'absolute',
      right: 0,
      marginInlineEnd: theme.spacing(4),
      padding: theme.spacing(2, 3)
    }
}));