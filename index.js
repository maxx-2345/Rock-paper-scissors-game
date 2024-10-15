// object score to count number of wins, losses and ties.

      // we updated our object to localStorage as it saves the data and we used JSON.parse to convert it to normal JS object

      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0, // this block of code works same as below if satement
        ties: 0,
      };

      updateScoreElement();
      /* 
      if (!score) {     
        score = {
          wins: 0,
          losses: 0,
          ties:0
        };
      }
      */

      // function to decide whether you won or lose against the computer it will decide the value of "result".

      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = "";

        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose";
          } else if (computerMove === "paper") {
            result = "You won";
          } else if (computerMove === "scissors") {
            result = "Tie";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You won";
          } else if (computerMove === "paper") {
            result = "Tie";
          } else if (computerMove === "scissors") {
            result = "You lose";
          }
        } else if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie";
          } else if (computerMove === "paper") {
            result = "You lose";
          } else if (computerMove === "scissors") {
            result = "You won";
          }
        }

        // if block to count your number of wins, losses and ties.

        if (result === "You won") {
          score.wins += 1;
        } else if (result === "You lose") {
          score.losses += 1;
        } else if (result === "Tie") {
          score.ties += 1;
        }

        // we used localStorage to save the score so it doesn't get refreshed every time.

        // as localStorage only accept string so we converted our score object to string using JSON.stringify

        localStorage.setItem("score", JSON.stringify(score));

        updateScoreElement();

        function updateScoreElement() {
          document.querySelector(
            ".js-score"
          ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        // alert to display results.
        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(
          ".js-moves"
        ).innerHTML = `You
      <img src="./${playerMove}-emoji.png" alt="" class="move-icon" />
      <img src="./${computerMove}-emoji.png" alt="" class="move-icon" />
      Computer`;
      }

      // function to pick Computer move and it will return the computer move to playGame function.

      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = "";

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }