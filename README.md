# blackjack-trainer

## Blackjack Trainer:
This is a trainer to play blackjack


## Objects/Variables/Struture

   - Class = Hand. Extends Player and Dealer
    - Array = for optimal play
    - Array = Dealer playing rules
    - Counter helper variables for counting cards

# deck object
   - A deck of cards
   - array of suits, array of name, array of value. Combine as needed/best.
   
# shoe object:
    - # of decks
    - Deck penatration setting/current
    - Shuffle Methods
    - Running count

# Hand object:
    - Total value
    - is it a pair?
    - is it a soft hand?
    - each card in array

# Methods:

    Initialize:
        - Deal both players
        - Layout buttons: Hit/Stand/Split/Double
        - Feedback Screen/"hidden hints" toggle
        - Bet Big Button?

    Click button: 
        - Check against optimal array, Offer Correct/incorrect feedback.
            - Provide logical feedback if possible
        - Proceed w/ Game

    Hit: 
        - give player another card
        - if bust, start new hand

    Stand: 
        - Dealer begins to play

    Split: 
        - Create new player hand using one of each card
            - Make hands classes and create a new instance?

    Double: 
        - One hit, then dealer plays

    Dealer: 
        - Uses dealer rules, plays hand
        - Peak, or ignore dealer 21s all together?

# Misc potential problems/issues:
    - Treatment of ace as high and low
    - Creating and checking array for optimal play, specifically since there are 3 different arrays (normal, one for soft hands, and one for pairs)
    - Do i need to track suits?

# Reach goals/'would be nice' ideas/Icebox
    - User can set number of decks and specific rules that a casino may offer. 
        - Give user expected value of the settings
    - Display mistakes in terms of expected value.
    - Keep track of correct/incorrect actions over a session, track expected value in percentage and bets/per
    - Professional/subdued response vs. "Fun" responses to correct/incorrect
    - Sounds



