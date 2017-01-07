var React = require("react");

var CountdownForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        // match numbers (starting and ending with digit...
        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';

            // parent function callback back , as property..
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
});

module.exports =  CountdownForm;