--- Condition of the problem:

/*
You get any card as an argument. Your task is to return 
the suit of this card (in lowercase).
Our deck (is preloaded):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

--- MY SOLUTION: ---
clever: 2

  function defineSuit(card) {
    if (card.includes('♣')) {
      return "clubs";
    }
    else if (card.includes('♦')) {
      return "diamonds";
    }
    else if (card.includes('♥')) {
      return "hearts";
    }
    else if (card.includes('♠')) {
      return "spades";
    }
  };


  
--- OTHER SOLUTIONS: ---

1) clever: 151

  function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }

2) clever: 84

  function defineSuit(card) {
    return {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    }[card.substr(-1)]
  }

3) clever: 68

  function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
  }
  
4) clever: 55

  defineSuit=([a,b,c])=>({"♣":'clubs',"♠":'spades',"♦":'diamonds',"♥":'hearts'})[c||b]
  
5) clever: 28

  function defineSuit(card) {
    return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
  }