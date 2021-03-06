import React, { Component } from "react";
import PlayingSquare from "./PlayingSquare.js";
import Winner from "./Winner.js";
import TurnDisplayer from "./TurnDisplayer.js";

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            player: 1,
            xSize: 3,
            ySize: 3,
            stage: 0,
            gridClassNames: ["grid-container"]
        };
    }

    handlePlayingSquareClick = key => {
        if (this.state.board[key] !== 0 || this.state.winner) {
            //do nothing if it is checked or game is won
            return;
        }

        let newBoard = this.state.board.slice();

        switch (this.state.player) {
            case 1:
                newBoard[key] = 1;
                this.winConditionCheck(newBoard, 1);
                break;
            case 2:
                newBoard[key] = 2;
                this.winConditionCheck(newBoard, 2);
                break;
            default:
                break;
        }

        this.setState({
            board: newBoard,
            player: this.state.player === 1 ? 2 : 1
        });
    };

    winConditionCheck(board, player) {
        this.setState({ stage: this.state.stage + 1 });

        if (
            this.checkRows(board, player) ||
            this.checkCols(board, player) ||
            this.checkDiagonals(board, player)
        ) {
            this.setState({
                
            });

            setTimeout(() => { this.setState({winner: player, gridClassNames: ["grid-container", "grid-animation"]}) }, 1000);
        } else if (
            this.state.stage ===
            this.state.xSize * this.state.ySize - 1
        ) {
            this.setState({ winner: "tie" });
        }
    }

    checkRows(board, player) {
        for (let i = 0; i < board.length; i += this.state.xSize) {
            if (board[i] === player) {
                for (let x = 0; x < this.state.xSize; x++) {
                    if (board[i + x] !== player) {
                        return false;
                    }
                }
            } else if (board[i] !== player) {
                continue;
            }
            console.log("Row: ", i);
            this.setState({ winRow: i });
            return true;
        }
    }

    checkCols(board, player) {
        for (let i = 0; i < this.state.ySize; i++) {
            if (board[i] === player) {
                for (let x = 0; x < board.length; x += this.state.ySize) {
                    if (board[i + x] !== player) {
                        return false;
                    }
                }
            } else if (board[i] !== player) {
                continue;
            }
            console.log("Col: ", i);
            //+3 so it selects one of the middle squares
            //this is so the line displays correctly
            this.setState({ winCol: i + 3 });
            return true;
        }
    }

    checkDiagonals(board, player) {
        //to do: scalable diagonal check
        if (board[0] === player && board[4] === player && board[8] === player) {
          this.setState({winDiag: "backline"});
          return true;
        } else if (
          board[2] === player && board[4] === player && board[6] === player) {
            this.setState({winDiag: "fwd"});
            return true;
        }
        return false;
    }

    restart = () => {
        this.setState({
            board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            player: 1,
            stage: 0,
            gridClassNames: ["grid-container"],
            winner: null,
            winRow: null,
            winCol: null,
            winDiag: null
        });
    };

    render() {
        const boardSize = this.state.xSize * this.state.ySize;
        let playingSquares = [];

        for (let i = 0; i < boardSize; i++) {
            playingSquares.push(
                <PlayingSquare
                    onClick={this.handlePlayingSquareClick}
                    player={this.state.player}
                    key={i}
                    number={i}
                    board={this.state.board}
                    winRow={this.state.winRow}
                    winCol={this.state.winCol}
                    winDiag={this.state.winDiag}
                />
            );
        }

        return (
            <React.Fragment>
                {this.state.winner ? (
                    ""
                ) : (
                    <TurnDisplayer player={this.state.player} />
                )}

                {this.state.winner ? (
                    <Winner onClick={this.restart} player={this.state.winner} />
                ) : (
                    ""
                )}

                <div className={this.state.gridClassNames.join(" ")}>
                    {playingSquares}
                </div>
            </React.Fragment>
        );
    }
}
