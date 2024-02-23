const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const onlineQuiz = [
    {
        question: 'What is the capital city of Rwanda?',
        options: ['Musanze', 'Kigali', 'Kamplara', 'Kenya'],
        answer: 'Kigali'
    },
    {
        question: 'What is the answer to 6 + 2?',
        options: [1, 4, 5, 7, 8],
        answer: 8
    }
];

let score = 0;
let currentQuestionIndex = 0;

const displayRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * onlineQuiz.length);
    const randomQuestion = onlineQuiz[randomIndex];
    console.log(randomQuestion.question);
    randomQuestion.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    rl.question('Enter your answer (by option number): ', (userAnswer) => {
        checkAnswer(parseInt(userAnswer), randomQuestion.answer);
    });
};

const checkAnswer = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer || userAnswer - 1 === correctAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log("Incorrect!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < onlineQuiz.length) {
        displayRandomQuestion();
    } else {
        endQuiz();
        rl.close();
    }
};

const endQuiz = () => {
    console.log(`Quiz ended. Your score: ${score}/${onlineQuiz.length}`);
};

displayRandomQuestion(); 