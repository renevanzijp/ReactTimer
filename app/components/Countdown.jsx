var React  = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    render: function () {
        var {count, countdownStatus} = this.state;
        console.log("Status: ", countdownStatus);
        return (
        <div>
            <Clock totalSeconds={count}/>
            <CountdownForm onSetCountdown={this.handleSetCountdown} />
        </div>
        );
    }
});

module.exports = Countdown;