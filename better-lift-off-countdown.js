function countDown(time) {
    if (!Number.isInteger(time) || Math.sign(time) === -1) {
        console.error("Time value is not a positive integer");
        return;
    }

    if (time === 0) {
        setTimeout(function () {
            console.log("Lift-off!");
        }, (3 - time) * 1000); // Instead of 3 should be able to take in any positive integer time value
    } else {
        setTimeout(function () {
            console.log(time);
        }, (3 - time) * 1000);
        countDown(time - 1);
    }
}
countDown(3);
