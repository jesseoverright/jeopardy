var React = require('react');

var CurrentQuestion = require('./CurrentQuestion.jsx');

var FinalJeopardy = React.createClass({
    getInitialState: function() {
        return {
            currentQuestion: "This is the final jeopardy question",
            currentAnswer: "What is the answer?",
            showQuestion: false,
            showAnswer: false
        }
    },
    showQuestion: function() {
        this.setState({
            showQuestion: true
        })
    },
    closeQuestion: function() {
        this.setState({
            showQuestion: false,
            showAnswer: false
        })
    },
    showAnswer: function() {
        this.setState({
            showAnswer: true
        });
    },
    render: function() {
        return (
            <div>
                <CurrentQuestion
                    question={this.state.currentQuestion}
                    answer={this.state.currentAnswer}
                    showQuestion={this.state.showQuestion}
                    showAnswer={this.state.showAnswer}
                    handleClick={this.showAnswer}
                    handleClose={this.closeQuestion}
                />
                <div onClick={this.showQuestion} className="final-jeopardy" />
            </div>
        );
    }
});

React.render(<FinalJeopardy />, document.getElementById('main'));
