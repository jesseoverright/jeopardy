var React = require('react');

var Question = React.createClass({
    handleClick: function() {
        this.props.handleClick(
            this.props.categoryIndex,
            this.props.questionIndex,
            this.props.question,
            this.props.answer
        );
    },
    render: function() {
        if (this.props.answered) {
            return (
                <div className="question"></div>
            );
        }
        return (
            <div className="question" onClick={this.handleClick}>
                <p>{this.props.value}</p>
            </div>
        )
    }
});

module.exports = Question;