fetch('./js/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {

            let estimationQuality = document.getElementById(element.category);
            let iconDiv = estimationQuality.getElementsByClassName("rectangle-icon")[0];
            let resultDiv = estimationQuality.getElementsByClassName("rectangle-result")[0];
            let qualityDiv = estimationQuality.getElementsByClassName("rectangle-name")[0];
            iconDiv.insertAdjacentHTML("beforeend", `<img src="${element.icon}" alt="icon"/>`);
            resultDiv.innerHTML = element.score;
            qualityDiv.innerHTML = element.category;
        })
    });