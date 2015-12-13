# Jeopardy

A playable Jeopardy board.

![Jeopardy Board](https://raw.githubusercontent.com/jesseoverright/jeopardy/master/img/jeopardy-board.png)

![Jeopardy Question](https://raw.githubusercontent.com/jesseoverright/jeopardy/master/img/question-example.jpg) ![Jeopardy Answer](https://raw.githubusercontent.com/jesseoverright/jeopardy/master/img/answer-example.jpg)


## Playing a game

1. Start up the simple http server using node.js

    `$ npm start`

2. Go to `localhost:9000`

## Final Jeopardy

Final Jeopardy is available at `final.html`

## Creating your own questions

Create your own categories, questions and answers using  `/dist/blank.json` as a template. Load your questions onto the Jeopardy board using the `question` query parameter.

ex. `localhost:9000?questions=newQuestions` for `dist/newQuestions.json`
