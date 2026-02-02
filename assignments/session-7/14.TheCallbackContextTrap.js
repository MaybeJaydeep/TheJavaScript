const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore(); //Regular function in setTimeout -> loses (this).

const player1 = {
    score: 100,
    updateScore() {
        setTimeout(() =>
            console.log(this.score)
        );
    }
};

player1.updateScore(); // 100     Arrow function doesn't loses (this) in setTimeout.
