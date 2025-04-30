function judgeScore(score) {
    if (score > 20) {
        return "Great score!";
    } else if (score > 10) {
        return "Good score";
    } else if (score < 5) {
        return "Awful score...";
    } else {
        return "Okay score";
    }
}

function giveScoreComment(score) {
    const comment = judgeScore(score);
    return `We have judged your score to be: ${comment}`;
}

console.log(giveScoreComment(2));
