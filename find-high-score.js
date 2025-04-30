import { input } from "./utils.js";

const findHighScore = function (scores) {
    function compareNumbers(a, b) {
        return a - b;
    }

    scores.sort(compareNumbers);
    const highScore = scores[scores.length - 1];
    return highScore;
};

// Simpler way: function findHighScore(scores) { return Math.max(...scores) }
// ... is 'spread syntax' and expands the array into individual elements (or arguments in this case)

const main = async function () {
    const scores = [];

    while (true) {
        const inputStr = await input(
            "Enter a score. To cancel, type 'done':\n"
        );
        if (inputStr === "done") {
            break;
        } else {
            const newScore = Number(inputStr);
            if (isNaN(newScore)) {
                console.error(
                    "That is not a valid score - score must be a number"
                );
            } else {
                scores.push(newScore);
            }
        }
    }

    console.log("The high score is", findHighScore(scores));
};

main();
