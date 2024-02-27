fetch('.//data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {

            let estimationQuality = document.getElementById(element.category);
            let iconDiv = estimationQuality.getElementsByClassName("rectangle-icon")[0];
            iconDiv.insertAdjacentHTML("beforeend", `<img src="${element.icon}" alt="icon"/>`);
            let resultDiv = estimationQuality.getElementsByClassName("rectangle-result")[0];
            resultDiv.innerHTML = element.score;
            let qualityDiv = estimationQuality.getElementsByClassName("rectangle-name")[0];
            qualityDiv.innerHTML = element.category;
        })
    });