
function checkAnswer(){
    const correctAnswer = "4";
    let useranswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = useranswer.value;
    if (userAnswer) {
        
        console.log(userAnswer);
    } else {
        console.log("No answer selected.");
    }

    const result = document.getElementById('feedback');
    if (result) {
        if (userAnswer === correctAnswer) {
            result.textContent = "Correct! Well done.";
        } else if (userAnswer){
            result.textContent = "That's incorrect. Try again!";
        } else {
            result.textContent = "No answer selected.";
        }
    }
}


// Run checkAnswer only when the user clicks the submit button
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-answer');
    if (submitBtn) {
        submitBtn.addEventListener('click', checkAnswer);
    }
});