import readline from "readline";

export const input = function (query) {
    const rl = readline.createInterface(process.stdin, process.stdout);

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};
