document.addEventListener("DOMContentLoaded", function (event) {
    let billInput = document.querySelector("#billInput") //the input field
    let tipNumInput = document.querySelector("#tipNumInput") // the display for the tip amount
    let numOfPeopleInput = document.querySelector("#numOfPeopleInput")
    let tipNum1 = document.querySelector("#tipNumOne")
    let tipNum2 = document.querySelector(".tip-num-2")
    let tipNum3 = document.querySelector(".tip-num-3")
    let tipNum4 = document.querySelector(".tip-num-4")
    let tipNum5 = document.querySelector(".tip-num-5")
    let customTipButton = document.querySelector(".tip-num-6")
    let totalTip = document.querySelector("#totalTip")
    let customTipInputContainer = document.querySelector("#customTipInputContainer")
    let customTipInput = document.querySelector("#customTipInput")
    let marginForTipnuminput = document.querySelector(".tip-word-2")
    
    let calculatedTipAmount = 0
    let calculatedTotalTip = 0

    // Get 5%
    tipNum1.addEventListener("click", function () {
        if (billInput.value > 0) {
            calculatedTipAmount = Math.floor(billInput.value * 0.05)
            tipNumInput.innerHTML = "$" + calculatedTipAmount
            marginForTipnuminput.style.margin = "2px"
        }

        // multiply by number of people
        if (numOfPeopleInput.value > 0) {
            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value
            totalTip.innerHTML = "$" + calculatedTotalTip
        }
    })

    // Get 10%

    tipNum2.addEventListener("click", function () {
        if (billInput.value > 0) {
            calculatedTipAmount = Math.floor(billInput.value * 0.10 )
            tipNumInput.innerHTML = "$" + calculatedTipAmount
            marginForTipnuminput.style.margin = "2px"
        }

        // multiply by number of people
        if (numOfPeopleInput.value > 0) {
            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value
            totalTip.innerHTML = "$" + calculatedTotalTip
        }
    })

    //get 15%

    tipNum3.addEventListener("click", function () {
        if (billInput.value > 0) {
            calculatedTipAmount = Math.floor(billInput.value * 0.15 )
            tipNumInput.innerHTML = "$" + calculatedTipAmount
            marginForTipnuminput.style.margin = "2px"
        }

        // multiply by number of people
        if (numOfPeopleInput.value > 0) {
            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value
            totalTip.innerHTML = "$" + calculatedTotalTip
        }
    })


    //get 25%
    tipNum4.addEventListener("click", function () {
        if (billInput.value > 0) {
            calculatedTipAmount = Math.floor(billInput.value * 0.25 )
            tipNumInput.innerHTML = "$" + calculatedTipAmount
            marginForTipnuminput.style.margin = "2px"
        }

        // multiply by number of people
        if (numOfPeopleInput.value > 0) {
            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value
            totalTip.innerHTML = "$" + calculatedTotalTip
        }
    })

    // get 50%

    tipNum5.addEventListener("click", function () {
        if (billInput.value > 0) {
            calculatedTipAmount = Math.floor(billInput.value * 0.50 )
            tipNumInput.innerHTML = "$" + calculatedTipAmount
            marginForTipnuminput.style.margin = "2px"
        }

        // multiply by number of people
        if (numOfPeopleInput.value > 0) {
            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value
            totalTip.innerHTML = "$" + calculatedTotalTip
        }
    })

    // Custom Button

    customTipButton.addEventListener("click", function () {
     customTipInputContainer.innerHTML = '<label for="customTipInput">Custom Tip %: </label>' + '<br>' + '<input type="number" id="customTipInput">' 
     })
     
     customTipInputContainer.addEventListener("input", function (event) {
    if (event.target && event.target.id === "customTipInput") {
        if (event.target.value > 0 && billInput.value > 0) {
            calculatedTipAmount = (billInput.value * event.target.value) / 100;
            tipNumInput.innerHTML = "$" + calculatedTipAmount.toFixed(2);
        } else {
            tipNumInput.innerHTML = "$0.00";
        }

        if (numOfPeopleInput.value > 0) {
            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value;
            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2);
        } else {
            totalTip.innerHTML = "$0.00";
        }
    }
});


    // customTipButton.addEventListener("blur", function () {
    //     customTipInputContainer.innerHTML = ""
    // })

    // customTipInput.addEventListener("input", function () {
    //     if (customTipInput.value > 0) {
    //         calculatedTipAmount = billInput.value * customTipInput.value
    //         tipNumInput.innerHTML = calculatedTipAmount
    //     }

        // // multiply by number of people
        // if (numOfPeopleInput.value > 0) {
        //     calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value
        //     totalTip.innerHTML = calculatedTotalTip
        // }
    // })

    let numOfPeopleErrorMessage = document.querySelector("#numOfPeopleErrorMessage")
    numOfPeopleInput.addEventListener("input", function () {
        if (numOfPeopleInput.value < 1) {
            numOfPeopleErrorMessage.innerHTML = "Can't be zero"
            numOfPeopleErrorMessage.style.color = 'red'
            numOfPeopleInput.style.border = "red solid 1" 
        } else {
            numOfPeopleErrorMessage.innerHTML = ""
        }
    })

    let resetButton = document.querySelector("#resetButton")
    resetButton.addEventListener("click", function () {
        tipNumInput.innerHTML = "$0.00"
        totalTip.innerHTML = "$0.00"
        numOfPeopleInput.value = ""
        billInput.value = ""
        customTipInputContainer.innerHTML = ""
    })
})