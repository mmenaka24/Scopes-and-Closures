function findHighScore(scores) {
    function compareNumbers(a, b) {
        return a - b;
    }

    scores.sort(compareNumbers);
    const highScore = scores[scores.length - 1];
    return highScore;
}

const scores = [1, 200, 40, 5];
console.log(findHighScore(scores));

// Simpler way: function findHighScore(scores) { return Math.max(...scores) }
// ... is 'spread syntax' and expands the array into individual elements (or arguments in this case)
