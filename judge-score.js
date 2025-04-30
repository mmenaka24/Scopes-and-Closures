import { input } from "./utils.js";

const judgeScore = function (score) {
    if (score > 20) {
        return "Great score!";
    } else if (score > 10) {
        return "Good score";
    } else if (score < 5) {
        return "Awful score...";
    } else {
        return "Okay score";
    }
};

const giveScoreComment = function (score) {
    const comment = judgeScore(score);
    return `We have judged your score to be: ${comment}`;
};

const main = async function () {
    const score = await input("Enter your score: ");
    console.log(giveScoreComment(score));
};

main();
