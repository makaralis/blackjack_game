import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameResult, setGameResult] = useState("");

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
    <div>
      {gameStarted ? (
        <div>
          <p>Player cards: {playerCards.join(", ")}</p>
          <p>Dealer card: {dealerCards[0].suit}</p>
          <button onClick={handleHit}>Hit</button>
          <button onClick={handleStand}>Stand</button>
          {gameResult ? <p>{gameResult}</p> : null}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

