//Pegar os dados do JSON
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);

    for (let i = 0; i < jsonData.length; i++) {
      document.querySelectorAll(".title")[i].textContent = jsonData[i].title;
    }
    document.querySelector(".day").addEventListener("click", () => {
      for (let i = 0; i < jsonData.length; i++) {
        document.querySelectorAll(".current-hours")[i].textContent = `${jsonData[i].timeframes.daily.current}hrs`;
        document.querySelectorAll(".previous-hours")[i].textContent = `${jsonData[i].timeframes.daily.previous}hrs`;

      }
    });
    //Apontando elemento e adicionando função 
    document.querySelector('.week').addEventListener("click", () => {
      for (let i = 0; i < jsonData.length; i++) {
        document.querySelectorAll(".current-hours")[i].textContent = `${jsonData[i].timeframes.weekly.current}hrs`
        document.querySelectorAll(".previous-hours")[i].textContent = `${jsonData[i].timeframes.weekly.previous}hrs`
      }
    })
    //Apontando elemeno e adicionando função
    document.querySelector(".month").addEventListener("click", () => {
      for (let i = 0; i < jsonData.length; i++) {
        document.querySelectorAll(".current-hours")[i].textContent = `${jsonData[i].timeframes.monthly.current}hrs`
        document.querySelectorAll(".previous-hours")[i].textContent = `${jsonData[i].timeframes.monthly.previous}hrs`
      }
    })
  });