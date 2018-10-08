# 2018 Christmas Card

Pop quiz, hotshot: Merry Christmas!

## Components

### <Introduction />

Introduces the user to the game and the card premise.

### <SplitScreen />

Splits its children into two panels, which align vertically for narrow screens and horizontally for wide screens.

### <Progress />

Tracks progress through the game.

**Props**

  * steps - an array of steps along the way
  * current - a number representing the zero-based index of the current step
  * onChange - a callback to be called upon navigation
  * simple - a boolean for rendering a simple arrow navigation or more complex step-based navigation

### <Reward></Reward>

Renders a reward, ideally for solving a `<Quiz />`.

**Props**

  * image - a string to an image src
  * video - a string to a YouTube video source
  * show - a boolean for whether to show reward content or not
  * children - the content of the reward

### <Quiz />

Presents a question and possible answers for the reader to choose from.

**Props**

  * question - a string of the question
  * answers - an array of strings of possible answers
  * correctAnswer - a string of the correct answer ID
  * chosenAnswer - a string of the answer ID chosen by the reader

### <Game />

Handles the state of all the various child components above.
