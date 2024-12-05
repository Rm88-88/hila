import chess
import chess.svg
import random
from IPython.display import display, SVG

def play_game():
    board = chess.Board()
    while not board.is_game_over():
        display(SVG(chess.svg.board(board=board)))
        if board.turn == chess.WHITE:
            move = input("Enter your move: ")
            try:
                board.push_san(move)
            except ValueError:
                print("Invalid move. Try again.")
        else:
            move = random.choice(list(board.legal_moves))
            board.push(move)
            print(f"Computer move: {board.san(move)}")
    display(SVG(chess.svg.board(board=board)))
    print("Game over!")
    print(board.result())

if __name__ == "__main__":
    play_game()
