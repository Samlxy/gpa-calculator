// updates the value of credit scores in empty input field and returns the sum
function sumCredits() {
  let credit = document.getElementsByName("credits");
  let sum = 0;
  for(let i = 0; i < credit.length; i++) {
    if(parseInt(credit[i].value)) {
      sum += parseInt(credit[i].value);
    }
  }
  document.getElementById("credit-sum").value = sum;
}

// parent function calls child functions that multiplies credits and grades rows individually
function calculateScore() {
  multiplyRowOne();
  multiplyRowTwo();
  multiplyRowThree();
  multiplyRowFour();
  multiplyRowFive();
  multiplyRowSix();
  sumScores();
  divideSums();
} 

function multiplyRowOne() {
  let credit = document.getElementById("credit-sum1").value;
  let grade = document.getElementById("grade-sum1").value;
  let score = credit * grade;
  document.getElementById("score-output1").value = score.toFixed(1);
}

function multiplyRowTwo() {
  let credit = document.getElementById("credit-sum2").value;
  let grade = document.getElementById("grade-sum2").value;
  let score = credit * grade;
  document.getElementById("score-output2").value = score.toFixed(1);
} 

function multiplyRowThree() {
  let credit = document.getElementById("credit-sum3").value;
  let grade = document.getElementById("grade-sum3").value;
  let score = credit * grade;
  document.getElementById("score-output3").value = score.toFixed(1);
}

function multiplyRowFour() {
  let credit = document.getElementById("credit-sum4").value;
  let grade = document.getElementById("grade-sum4").value;
  let score = credit * grade;
  document.getElementById("score-output4").value = score.toFixed(1);
}

function multiplyRowFive() {
  let credit = document.getElementById("credit-sum5").value;
  let grade = document.getElementById("grade-sum5").value;
  let score = credit * grade;
  document.getElementById("score-output5").value = score.toFixed(1);
}

function multiplyRowSix() {
  let credit = document.getElementById("credit-sum6").value;
  let grade = document.getElementById("grade-sum6").value;
  let score = credit * grade;
  document.getElementById("score-output6").value = score.toFixed(1);
}

function sumScores() {
  let scores = document.getElementsByName("scores");
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
      if(parseFloat(scores[i].value)) {
        sum += parseFloat(scores[i].value);
      }
    }
  document.getElementById("score-sum").value = sum.toFixed(1);
}

function divideSums() {
  let scoresSum = document.getElementById("score-sum").value;
  let creditsSum = document.getElementById("credit-sum").value;
  let gpa = scoresSum / creditsSum;
  document.getElementById("output-field").innerHTML = gpa.toFixed(1);
  console.log("score: " + gpa);
}
