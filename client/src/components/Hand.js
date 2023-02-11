import Card from "./Card";
import { useStyles } from "../styles/hand";
import { Typography } from "@material-ui/core";

import cardBack from '../assets/cardBack.jpg';

const Hand = (props) => {
  const classes = useStyles();

  return (
    <div className={props.player ? classes.playerHand : classes.dealerHand}>
      <Typography variant='h4' className={classes.total}>{props.player ? ('Player total: ' + props.total) : ''}</Typography>
      {props.cards.map((card, id) => {
        if (id === 1 && !props.player) {
          return <Card src={cardBack} key={id} />
        }
        return <Card src={card.image} key={id} />
      })}
    </div>
  );
}
export default Hand;
