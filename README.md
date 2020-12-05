https://sites.google.com/site/memoryproblems01/the-importance-of-memory-games - whyplay paragraph

This project is designed as a memory game to help improve your memory and have some fun while doing so. It includes a click counter so that improvement progress can be tracked.
Information is also available to show the user why playing games like this are good for your memory and the effects it can have.

## User Stories

1. As a user I want to play a game that is fun and based around improving memory.

2. As a user I want to know what my current skill level is and if I'm improving.

3. As a user I want a game that I can play and learn easily without a steep learning curve.

4. As a user I want to learn how playing memory games can help improve my memory.

5. As a user I want to be able to play on my mobile phone so I can play on the move.

## Features

## Tech used

## Testing




## Bugs 

Nav bar buttons js - when clicking play button after looking at the why play section, the js would make the card area visible as well as player info section
    fix - removed class from card area and added line in js to hide card area as separate class when viewing why play section, this class is not called upon clicking the play button in nav bar 

User decided to reset game by hitting play button again cardMatch length would not reset and affect next game 
    fix - added cardMatch.length = 0 to start button, this clears array upon starting game.