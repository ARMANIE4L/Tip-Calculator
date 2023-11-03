// IN THIS CODE I MADE A MISTAKE. I CODED ALL THE PERCENT ONE AFTER THE OTHER THEREBY REPEATING CODES FOR BOTH THE DOLLAR AND NAIRA, WHEN I COULD HAVE JUST SAVE THEM TO FUNCTIONS AND CALL THEM WHEN I NEEDED THEM THUS MAKING MY CODE WAY TOO LONG AND KINDA COMPLEX. I REALIZED THIS MISTAKE A BIT TOO LATE AND I HAD THE OPTION OF RESTRUCTURING THE ENTIRE CODE BUT THEN DOING THAT POSES TO BE A DIFFICULT AND TIME-CONSUMING TASK FOR  ME AT THIS STAGE. MAYBE LATER I WILL GET BACK TO THIS PROJECT AND DO JUST THAT AND ALSO FIX OTHER POTENTIAL CALCULATION BUGS.





document.addEventListener("DOMContentLoaded", function (event) {

    let billInput = document.querySelector("#billInput")

    let tipNumInput = document.querySelector("#tipNumInput")

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

    let select = document.querySelector("select")

    let tipWord2 = document.querySelector(".tip-word-2-b")





    

    let calculatedTipAmount = 0

    let calculatedTotalTip = 0



    // Get 5%

    tipNum1.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.05)

            tipNumInput.innerHTML = "$" + calculatedTipAmount.toFixed(2)

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        } else {

            totalTip.innerHTML = "$" + calculatedTipAmount.toFixed(2)

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        }

    })



    // Get 10%



    tipNum2.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.10 )

            tipNumInput.innerHTML = "$" + calculatedTipAmount.toFixed(2)

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        } else {

            totalTip.innerHTML = "$" + calculatedTipAmount.toFixed(2)

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        }

    })



    //get 15%



    tipNum3.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.15 )

            tipNumInput.innerHTML = "$" + calculatedTipAmount.toFixed(2)

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        } else {

            totalTip.innerHTML = "$" + calculatedTipAmount.toFixed(2)

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        }

    })





    //get 25%

    tipNum4.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.25 )

            tipNumInput.innerHTML = "$" + calculatedTipAmount.toFixed(2)

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        } else {

            totalTip.innerHTML = "$" + calculatedTipAmount.toFixed(2)

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        }

    })



    // get 50%



    tipNum5.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.50 )

            tipNumInput.innerHTML = "$" + calculatedTipAmount.toFixed(2)

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        } else {

            totalTip.innerHTML = "$" + calculatedTipAmount.toFixed(2)

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2)

        }

    })



    // Custom Button



    customTipButton.addEventListener("click", function () {

     customTipInputContainer.innerHTML = '<label for="customTipInput" >Custom Tip %: </label>' + '<br>' + '<input type="number" id="customTipInput">' 

     customTipInputContainer.style.color = "hsl(189, 87%, 21%)"

     })

     

     customTipInputContainer.addEventListener("input", function (event) {

     if (event.target && event.target.id === "customTipInput") {

        if (event.target.value > 0 && billInput.value > 0) {

            calculatedTipAmount = (billInput.value * event.target.value) / 100;

            tipNumInput.innerHTML = "$" + calculatedTipAmount.toFixed(2);

        } else {

            tipNumInput.innerHTML = "$0.00";

            totalTip.innerHTML = "$0.00";

        }

        numOfPeopleInput.addEventListener("input", function (event) {

            if (numOfPeopleInput.value > 0) {

                calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value;

                totalTip.innerHTML = "$" + calculatedTotalTip.toFixed(2);

            } else {

                totalTip.innerHTML = "$" + calculatedTipAmount.toFixed(2);

            }

        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

        })

    }

 });





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

        event.preventDefault()

        tipNumInput.innerHTML = "$0.00"

        totalTip.innerHTML = "$0.00"

    })



    //CHANGE TO NAIRA



    select.addEventListener("change",function () {

        if (select.value === "NGN") {

            event.preventDefault()

            tipNumInput.innerHTML = "₦0.00"

            totalTip.innerHTML = "₦0.00"

            billInput.classList.add("ngn-background")



                // Get 5%

    tipNum1.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.05)

            tipNumInput.innerHTML = "₦" + calculatedTipAmount

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        }  else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }

    })



    // Get 10%



    tipNum2.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.10 )

            tipNumInput.innerHTML = "₦" + calculatedTipAmount

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }

    })



    //get 15%



    tipNum3.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.15 )

            tipNumInput.innerHTML = "₦" + calculatedTipAmount

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }

    })





    //get 25%

    tipNum4.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.25 )

            tipNumInput.innerHTML = "₦" + calculatedTipAmount

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }

    })



    // get 50%



    tipNum5.addEventListener("click", function () {

        if (billInput.value > 0) {

            calculatedTipAmount = Math.floor(billInput.value * 0.50 )

            tipNumInput.innerHTML = "₦" + calculatedTipAmount

            marginForTipnuminput.style.margin = "2px"

        }



        // multiply by number of people

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }



        // CHANGE THE PERSONS WORD COUNT

        if (numOfPeopleInput.value > 1) {

            tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

            tipWord2.style.marginBottom = "10px"

        }

    })



    numOfPeopleInput.addEventListener("input", function () {

        if (numOfPeopleInput.value > 0) {

            calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value

            totalTip.innerHTML = "₦" + calculatedTotalTip

        } else {

            totalTip.innerHTML = "₦" + calculatedTipAmount

        }

    })



        // Custom Button



        customTipButton.addEventListener("click", function () {

            customTipInputContainer.innerHTML = '<label for="customTipInput" >Custom Tip %: </label>' + '<br>' + '<input type="number" id="customTipInput">' 

            customTipInputContainer.style.color = "hsl(189, 87%, 21%)"

            })

            

            customTipInputContainer.addEventListener("input", function (event) {

            if (event.target && event.target.id === "customTipInput") {

               if (event.target.value > 0 && billInput.value > 0) {

                   calculatedTipAmount = (billInput.value * event.target.value) / 100;

                   tipNumInput.innerHTML = "₦" + calculatedTipAmount.toFixed(2);

                   totalTip.innerHTML = "₦" + calculatedTotalTip

               } else {

                   tipNumInput.innerHTML = "₦0.00";

                   totalTip.innerHTML = "₦0.00";

               }

       

               if (numOfPeopleInput.value > 0) {

                   calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value;

                   totalTip.innerHTML = "₦" + calculatedTotalTip.toFixed(2);



               } else {

                   totalTip.innerHTML = "₦" + calculatedTipAmount;

               }



               numOfPeopleInput.addEventListener("input", function () {

                if (numOfPeopleInput.value > 0) {

                    calculatedTotalTip = calculatedTipAmount * numOfPeopleInput.value;

                    totalTip.innerHTML = "₦" + calculatedTotalTip.toFixed(2);

 

                } else {

                    totalTip.innerHTML = "₦" + calculatedTipAmount.toFixed(2);

                }



                // CHANGE THE PERSONS WORD COUNT

                if (numOfPeopleInput.value > 1) {

                  tipWord2.innerHTML = "/" + numOfPeopleInput.value + " people"

                  tipWord2.style.marginBottom = "10px"

                }

               })

           }

        });



        resetButton.addEventListener("click", function () {

            event.preventDefault()

            tipNumInput.innerHTML = "₦0.00"

            totalTip.innerHTML = "₦0.00"

        })



        } else {

            tipNumInput.innerHTML = "$0.00"

            totalTip.innerHTML = "$0.00"

            billInput.classList.remove("ngn-background")

        }

    })

})
