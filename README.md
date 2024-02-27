# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). 
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

1440px

![image](https://github.com/StepashkaJu/Results-summary-component-main/assets/121011573/e85789ce-02e8-45e4-9beb-8752650caa50)

391px (for iPhone 13, for example)

![image](https://github.com/StepashkaJu/Results-summary-component-main/assets/121011573/e83020be-9829-4cd3-9cd6-d60863d750f1)

### Links

- Solution URL: [https://github.com/StepashkaJu/Results-summary-component-main]
- Live Site URL: [https://stepashkaju.github.io/Results-summary-component-main/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JSON data file
- JavaScript Fetch API
- Mobile-first workflow

### What I learned

I found out how I can add fonts using TTF files from the project source files:

```css
@font-face {
    font-family: "Hanken Grotesk";
    src: url('assets/fonts/HankenGrotesk-VariableFont_wght.ttf') format('truetype'),
        url('assets/fonts/static/HankenGrotesk-Bold.ttf') format('truetype'),
        url('assets/fonts/static/HankenGrotesk-ExtraBold.ttf') format('truetype'),
        url('assets/fonts/static/HankenGrotesk-Medium.ttf') format('truetype');
    font-style: normal;
}
```
I also used a media query to adapt the layout to the mobile version:

```css
@media (max-width:770px){
/* changed styles, for instanse: */
    .card {
        flex-direction: column;
        width: 39.1rem;
        border-radius: 0;
        box-shadow: none;
    }
}
```
and how I could set the card and additional information in the middle of the view window:

```css
.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
```

I also created js file and make fetch request for fetching a data from a JSON file:

```js
fetch('.//data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            let estimationQuality = document.getElementById(element.category);
            let iconDiv = estimationQuality.getElementsByClassName("rectangle-icon")[0];
            iconDiv.insertAdjacentHTML("beforeend", `<img src="${element.icon}" />`);
            let resultDiv = estimationQuality.getElementsByClassName("rectangle-result")[0];
            resultDiv.innerHTML = element.score;
            let qualityDiv = estimationQuality.getElementsByClassName("rectangle-name")[0];
            qualityDiv.innerHTML = element.category;
        })
    });
```
and found out how I can insert svg-icon, when I had only path to icon in JSON file:

```js
 let iconDiv = estimationQuality.getElementsByClassName("rectangle-icon")[0];
 iconDiv.insertAdjacentHTML("beforeend", `<img src="${element.icon}" />`);

```

### Useful resources

- [https://www.freecodecamp.org/news/how-to-fetch-data-from-an-api-using-the-fetch-api-in-javascript/] - This helped me to make fetch request. Nice article.
- [https://developer.mozilla.org/] - This is an amazing resource about base princilpes and documents in HTML, CSS and JS. 


## Author
- GitHub - [StepashkaJu](https://github.com/StepashkaJu)
- Frontend Mentor - [@StepashkaJu](https://www.frontendmentor.io/profile/StepashkaJu)
  
