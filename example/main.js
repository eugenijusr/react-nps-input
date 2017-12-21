const React = require('react');
const ReactDOM = require('react-dom');

const NPSInput = require('../src');

const Example = React.createClass({
    onSubmit({ score, commentText }) {
        alert('Submitted ' + score + (commentText ? ' and comment "' + commentText + '"' : 'and no comment'));
    },

    render() {
        return (
            <div>
                <NPSInput onSubmit={this.onSubmit} comment={true}></NPSInput>
            </div>
        );
    }
});

ReactDOM.render(
    <Example />,
    document.getElementById('example')
);
