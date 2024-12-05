import chess
import chess.svg
from flask import Flask, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
    board = chess.Board()
    board_svg = chess.svg.board(board)
    return render_template_string('''<!DOCTYPE html>
<html>
<head>
    <title>Chess Game</title>
</head>
<body>
    <h1>Chess Game</h1>
    <div>{{ board|safe }}</div>
</body>
</html>''', board=board_svg)

if __name__ == '__main__':
    app.run(debug=True)
