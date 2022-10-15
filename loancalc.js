//  vars to work with
const amount = document.getElementById('amount');
const rate = document.getElementById('rate');
const years = document.getElementById('years');
const totalPayment = document.getElementById('total-payment');
const monthlyPayment = document.getElementById('monthly-payment');
const totalInterest = document.getElementById('total-interest');
const calculate = document.getElementById('calculate');
const results = document.querySelector('.results');
const calculating = document.getElementById('calculating');

//  add event listener to btn
calculate.addEventListener('click', function(e){
    // show calculating div
    calculating.style.display = 'block';
    //  then set a timeout to run after 3secs
    setTimeout(getResults, 2000)
    e.preventDefault();
});

// create the getResults function
function getResults(){
    const principal = parseFloat(amount.value);
    const calcRate = parseFloat(rate.value);
    const time = parseFloat(years.value);

    const calcTotalInterest = (principal * calcRate * time) / 100;
    const calcTotalPayment = principal + calcTotalInterest;
    const calcMonthlyPayment = calcTotalPayment / (time * 12);

    if (isFinite(calcMonthlyPayment))
    {
        // console.log(calcTotalInterest, calcTotalPayment, calcMonthlyPayment);
        calculating.style.display = 'none';
        results.style.display = 'block';

        totalPayment.value = calcTotalPayment.toFixed(2);
        monthlyPayment.value = calcMonthlyPayment.toFixed(2);
        totalInterest.value = calcTotalInterest.toFixed(2);
    } else {
        showError(); // this is the function that will run when user doesn't enter all fields
    }
}


//  we then create the showError function called above
function showError(){
    calculating.style.display = 'none';
    results.style.display = 'none';
    errorMessage = document.querySelector('.alert');
    errorMessage.style.display = 'block';
    setTimeout(clearErrorMessage, 5000);

    function clearErrorMessage(){
        errorMessage.style.display = 'none';
    }
}

function clearCalculatingDiv(){
    calculating.style.display = 'none';
}


// tutorial formula for interest
// const principal = parseFloat(amount.value);
//     const calcInterest = parseFloat(rate.value) / 100 / 12;
//     const time = parseFloat(years.value) * 12;

//     // compute monthly payment
//     const x = Math.pow(1 + calcInterest, time);
//     const monthly = (principal * x * calcInterest) / (x-1);

//     if (isFinite(monthly))
//     {
//         monthlyPayment.value = monthly.toFixed(2);
//         totalPayment.value = (monthly * time).toFixed(2);
//         totalInterest.value = ((monthly * time) - principal).toFixed(2);
//     } else {
//         console.log('Something is wrong');
//     }


// tutorial error message
// function showError(error){
//     // create a div
//     const errorDiv = document.createElement('div');
//     // get elements we will need
//     const card = document.querySelector('.card');
//     const heading = document.querySelector('.heading');
//    // give it a classname
//     errorDiv.className = 'alert';
//     // add a text node to it
//     errorDiv.appendChild(document.createTextNode(error));
//     // now place this new div beforethe heading
//     card.insertBefore(errorDiv, heading);
//     // set it to clear after 3secs
//     setTimeout(clearError, 3000);
//     // from the above, we have set a clearError function to run inside this our showError function for 3 secs
// }

// //  we then create the clearError  function called above
// function clearError(){
//     document.querySelector('.alert').remove();
// }
