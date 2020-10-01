const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const storyline = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

function askQuestion(obj) {
    rl.question(obj.q, (answer) => {
        if (obj.answers[answer]) {
            //  this block handles valid and correct answers with typeof "object";
            if (typeof obj.answers[answer] === "object") {
                askQuestion(obj.answers[answer]);
            } else {
                // if (typeof obj.answers[answer] === "string") {
                // this block handles valid but wrong answers with typeof "string"; and close the game
                console.log(obj.answers[answer]);
                rl.close();
            }
        } else {
            //  this block handles invalid answers with typeof "undefined";
            console.log("wrong answer, try again");
            askQuestion(obj);
        }
    });
}

askQuestion(storyline); // pass the object with the q and a's stored as an argument

//  bj.answers[answer] can take 3 values
// object: there is more story to tell > ask the next question: call askQuestion(<decide what the argument should be)
// string; game over / no more questions to ask (we close the interface as per the if block)
// undefined: invalid answer , scald user (else block runs and we ask the question again)
