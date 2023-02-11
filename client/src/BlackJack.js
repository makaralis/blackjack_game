import axios from "axios";
import { Box, Typography } from "@material-ui/core";
import { useState, useEffect, useCallback } from "react";

import "./index.css";
import GameBoard from "./components/GameBoard";
import WelcomeModal from "./components/WelcomeModal";

const BlackJack = () => {
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);
    const [gameModalMessage, setGameModalMessage] = useState();
    const [playerTotal, setPlayerTotal] = useState();

    const startGame = useCallback(async () => {
      axios
        .get("api/game/start")
        .then((res) => {
          setPlayerCards(res.data.playerCards);
          setDealerCards(res.data.dealerCards);
          setPlayerTotal(res.data.playerTotal);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    // player hits
    const handleHit = () => {
      axios
        .post("api/game/hit", {
          playerCards: playerCards,
        })
        .then((res) => {
          setPlayerCards(res.data.playerCards);
          setDealerCards(res.data.dealerCards);
          setPlayerTotal(res.data.playerTotal);

          // means that the player busted
          if (res.data.message) {
            setIsGameModalOpen(true);
            setGameModalMessage(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    // dealer hits
    const handleStand = () => {
      axios
        .post("api/game/stand", {
          playerCards: playerCards,
          dealerCards: dealerCards,
        })
        .then((res) => {
          setDealerCards(res.data.dealerCards);

          // means that the dealer busted
          if (res.data.message) {
            setIsGameModalOpen(true);
            setGameModalMessage(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      startGame().catch(console.error);
    }, [startGame]);

    return (
        <>
        {isWelcomeModalOpen ? <WelcomeModal open={isWelcomeModalOpen} handleClose={() => setIsWelcomeModalOpen(false)}/>
          : 
          <>
            <Typography variant="h1" className="h1-header">
              <Box className="h1-header">Welcome to BlackJack Game</Box>
            </Typography>
            <Box id="table">
              <GameBoard 
                handleHit={handleHit} handleStand={handleStand} dealerCards={dealerCards} playerCards={playerCards}
                isGameModalOpen={isGameModalOpen} gameModalClose={async () => { setIsGameModalOpen(false); await startGame(); } }
                gameMessage={gameModalMessage}
                playerTotal={playerTotal}
              />
            </Box>
          </>
        }
        </>
    )
}


export default BlackJack;
