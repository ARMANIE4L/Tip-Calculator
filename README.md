# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


### The challenge
The challenge is to build a tip calculator app that calculates what percentage of a bill would be tipped. ALso to custom button where the tipper would give a customized percentage of how much he wants to tip. 

### Screenshot

![](/Tip%20Calculator/images/Screenshot%20(367).png)
![](/Tip%20Calculator/images/Screenshot%20(368).png)



### Links

- Solution URL: https://www.github.com/ARMANIE4L/tip-calculator)
- Live Site URL: https://armanie4l.github.io/tip-calculator)

## My process

I first created the html, then styled it and gave it live with javascript. The entire process took me 48 Hours and it was such an exciting journey.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- javascript bootsrap
. css bootsrap
- Javascript


### What I learned

I learned, or rather relearned how to use bootstrap grids and also flexbox. I realixed during the project that while learning Javascript, i lost a great memory of how the grid system and flex box works. This project really helped me refresh my memory. 

### Continued development

I'm still yet to master many concepts in javascript including using event listeners. I hopr to build more projects from frontend mentor that will help me  master these important javascript concepts.

### Useful resources

chatgpt.openai.com - This AI bot really helped me out when i was stuck in writing the event listener for the custom button. I couldn't do that on my own as the button components were added dynamically.
here is a snippet of the js code i'm talking about:

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


## Author

- Website - (https://www.github.com/armsnie4l/)
- Frontend Mentor - [@armanie4l](https://www.frontendmentor.io/profile/armanie4l)
- Twitter - [@armanie4l](https://www.twitter.com/armanie4l)
