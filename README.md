# 2018 Christmas Card

Pop quiz, hotshot: Merry Christmas!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Components

### `<Introduction />`

Introduces the user to the game and the card premise.

### `<Progress />`

Tracks progress through the game.

**Props**

  * steps - an array of steps along the way
  * current - a number representing the zero-based index of the current step
  * onChange - a callback to be called upon navigation
  * simple - a boolean for rendering a simple arrow navigation or more complex step-based navigation

### `<Reward></Reward>`

Renders a reward, ideally for solving a `<Quiz />`.

**Props**

  * image - a string to an image src
  * video - a string to a YouTube video source
  * show - a boolean for whether to show reward content or not
  * children - the content of the reward

### `<Quiz />`

Presents a question and possible answers for the reader to choose from.

**Props**

  * question - a string of the question
  * answers - an array of strings of possible answers
  * correctAnswer - a string of the correct answer ID
  * chosenAnswer - a string of the answer ID chosen by the reader

### `<App />`

Handles the state of all the various child components above.
