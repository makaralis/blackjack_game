import axios from "axios";
import { Box, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";

import "./index.css";
import WelcomeModal from "./components/WelcomeModal";

const BlackJack = () => {
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameResult, setGameResult] = useState("");
    const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  
    useEffect(() => {
      axios
        .get("api/game/start")
        .then((res) => {
          console.log(res.data)
          setPlayerCards(res.data.playerCards);
          setDealerCards(res.data.dealerCards);
          setGameStarted(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    const handleHit = () => {
      axios
        .post("api/game/hit", {
          playerCards: playerCards,
        })
        .then((res) => {
          setPlayerCards(res.data.playerCards);
          setDealerCards(res.data.dealerCards);
  
          if (res.data.gameResult === "You have busted.") {
            setGameResult("You lose");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const handleStand = () => {
      axios
        .post("api/game/stand", {
          playerCards: playerCards,
          dealerCards: dealerCards,
        })
        .then((res) => {
          setDealerCards(res.data.dealerCards);
          setGameResult(res.data.gameResult);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
        <>
        {isWelcomeModalOpen ? <WelcomeModal open={isWelcomeModalOpen} handleClose={() => setIsWelcomeModalOpen(false)}/>
            : 
            <>
              <Typography variant="h1">
                <Box className="h1-header">Welcome to BlackJack Game</Box>
              </Typography>
              <Box id="table">
                
              </Box>
            </>
        }
        </>
    )
}


export default BlackJack;
