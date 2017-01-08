var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            TimerStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.TimerStatus !== prevState.TimerStatus) {
            switch (this.state.TimerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({TimerStatus: 'stopped'});
            }
        }, 1000);
    },
    handleSetTimer: function (seconds) {
        this.setState({
            count: seconds,
            TimerStatus: 'started'
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({TimerStatus: newStatus});
    },
    render: function () {
        var {count, TimerStatus} = this.state;
        var renderControlArea = () => {
            if (TimerStatus !== 'stopped') {
                return <Controls TimerStatus={TimerStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetTimer={this.handleSetTimer}/>;
            }
        };

        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Timer;