import React, { Component } from 'react';

export default class Winner extends Component {
    render() {
        let winner = this.props.player === 1 ? "X" : "O";
        if (this.props.player === "tie") {
            winner = "It's a tie!";
        }

        return (
            <div className="winContainer fade-in-winner">
            <p>
            {winner !== "tie" ? "WINNER" : ""}
            <span className="winner deep-orange-text"> {winner}</span>
            </p>

            <button className="btn deep-orange" onClick={this.props.onClick}>Play again</button>
            </div>
        );
    }
}