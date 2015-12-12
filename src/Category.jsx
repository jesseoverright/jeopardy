var React = require('react');

var Question = require('./Question.jsx');

var Category = React.createClass({
    getDefaultProps: function() {
        return {
            questions: [],
            handleClick: function() {}
        };
    },
    getQuestions: function() {
        var handleClick = this.props.handleClick;
        var categoryIndex = this.props.categoryIndex;
        var questions = this.props.questions.map( function(question, i) {
            return (
                <Question
                    value={question.value}
                    question={question.question}
                    answer={question.answer}
                    answered={question.answered}
                    handleClick={handleClick}
                    categoryIndex={categoryIndex}
                    questionIndex={i}
                />
            )
        });

        return questions;
    },
    render: function() {

        return (
            <div className="category">
                <div className="category-header"><p>{this.props.categoryName}</p></div>
                {this.getQuestions()}
            </div>
        )
    }
});

module.exports = Category;