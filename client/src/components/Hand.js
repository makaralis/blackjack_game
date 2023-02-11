import Card from "./Card";
import { useStyles } from "../styles/hand";
import { Typography } from "@material-ui/core";

import cardBack from '../assets/cardBack.jpg';

const Hand = (props) => {
  const classes = useStyles();

  return (
    <div className={props.player ? classes.playerHand : classes.dealerHand}>
      <Typography variant='h4' className={classes.total}>{props.player ? ('Your total: ' + props.total) : ''}</Typography>
      {props.cards.map((card, id) => {
        return <Card src={card.image} key={id} />
      })}
      {/* in case its a dealer's hand and game is not over, we are hiding the second card */}
      {!props.isShowing && !props.player ? <Card src={cardBack} /> : <></>}
    </div>
  );
}
export default Hand;
