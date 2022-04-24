let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    let numberAnswer = parseFloat(stringAnswer)
    weeklyExpenses = weeklyExpenses + numberAnswer
}