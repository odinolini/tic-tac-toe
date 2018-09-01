import React, { Component } from 'react';

export default class Winner extends Component {
    render() {
        const winner = this.props.player === 1 ? "X" : "O";
        const loser = this.props.player === 1 ? "O" : "X";

        return (
            <div className="winContainer">
            <p>
            WINNER:
            <span className="winner deep-orange-text"> {winner}</span>
            </p>
{/*             <span className="loser">{loser}</span> */}
            <button className="btn deep-orange" onClick={this.props.onClick}>Play again</button>
            </div>
        );
    }
}