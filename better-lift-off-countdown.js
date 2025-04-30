import { input } from "./utils.js";

function countDown(time, originalTime = time) {
    if (!Number.isInteger(time) || Math.sign(time) === -1) {
        console.error("Time value is not a positive integer");
        return;
    }

    if (time === 0) {
        setTimeout(function () {
            console.log("Lift-off!");
        }, (originalTime - time) * 1000);
    } else {
        setTimeout(function () {
            console.log(time);
        }, (originalTime - time) * 1000);
        countDown(time - 1, originalTime);
    }
}

const timeStr = await input("How many seconds until launch? ");
countDown(Number(timeStr));
