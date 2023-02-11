
import { Button } from "@material-ui/core";
import { useStyles } from "../styles/gameBoard";

import Hand from "./Hand";
import InGameModal from "./InGameModal";

const GameBoard = (props) => {
    const classes = useStyles();
    
    return (
        <div>
            <InGameModal
                message={props.gameMessage}
                open={props.isGameModalOpen}
                handleClose={props.gameModalClose}
            />
            <div className={classes.handsContainer}>
                <Hand
                    cards={props.dealerCards}
                    // isShowing will be false until the game wont be over
                    isShowing={props.isGameModalOpen}
                />
                <Hand
                    player={true}
                    cards={props.playerCards}
                    total={props.playerTotal}
                />
                <div className={classes.btnsContainer}>
                    <Button onClick={props.handleHit} color="primary" variant='outlined' className={classes.hitBtn}>HIT</Button>
                    <Button onClick={props.handleStand}  color="primary" variant='outlined' className={classes.standBtn}>STAND</Button>
                </div>
            </div>
        </div>
    )
}

export default GameBoard;