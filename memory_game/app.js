document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('#grid')
  const resultDisplay = document.querySelector('#result')
  const restartButton = document.querySelector('#restart')
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var _gamestart = false
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  var seconds = 00; 
  var tens = 00; 
  var Interval 

//restarts the game
  restartButton.onclick = function() {
    location.reload();
  }

/**
 * The createBoard function creates a board of blanck cards and appends them to the grid.
 * 
 * @return The grid element
 */
  function createBoard() {

    timerReset();
    _gamestart = false;
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


/**
 * The checkForMatch function checks to see if the two cards that have been clicked are a match.
 * If they are, it will remove them from the board and add them to an array of matches.
 */
  function checkForMatch() {

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      timerStop();
      resultDisplay.textContent = 'Congratulations 🎁! Completed in ' + (seconds+1) +' seconds'
    }
  }

  //flip your card
  function flipCard() {
    if (_gamestart == false) {
      timerStart();
      _gamestart = true;
    }
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }





// Timer Functions 

 
 /**
  * The timerStart function starts the timer.
  *
  * @return The interval id
  */ 
 function timerStart() {

    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
  /**
   * The timerStop function stops the timer.
   * 
   * @return The current time in milliseconds
   */
  function timerStop() {
       clearInterval(Interval);
  }
  
/**
 * The timerReset function resets the timer to 00:00.
 * 
 * @return The value of the variable tens
 */
   function timerReset() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
  /**
   * The startTimer function starts the timer.
   * 
   * @return The value of the seconds variable
   *
   */
  function startTimer () {

    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }

  createBoard()
})