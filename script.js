//Pegar os dados do JSON
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
    
    //Loop para percorrer todos os elementos do array
    for (let i = 0; i < jsonData.length; i++) {
      //Selecionar o elemento que vai ser modificado e alimentando o que vai ter nele
      document.querySelectorAll(".title")[i].textContent = jsonData[i].title;
    }
    //Apontando elemento e adicionando função
    document.querySelector(".day").addEventListener("click", () => {
      //Loop para percorrer todos os elementos do array
      for (let i = 0; i < jsonData.length; i++) {
        //Apontando e transformando em variavel todo elemento h2 com essa classe
        console.log(i);
        console.log(document.querySelectorAll(".current-hours")[i]);
        document.querySelectorAll(".current-hours")[i].textContent = `${jsonData[i].timeframes.daily.current}hrs`;

        document.querySelectorAll(".previous-hours")[i].textContent = `${jsonData[i].timeframes.daily.previous}hrs`;

        //Apontando e transformando em variavel todo elemento span com essa classe

        //O elemento dessa variavel no indice atual vai retornar essa propriedade do elemento atual contido no array

        //O elemento dessa variavel no indice atual vai retornar essa propriedade do elemento atual contido no array
      }
    });
    document.querySelector(".week").addEventListener("click", () => {
      for(let i = 0; i < jsonData.length; i++) {
        document.querySelectorAll(".current-hours")[i].textContent =`${jsonData[i].timeframes.weekly.current}hrs`

        document.querySelectorAll(".previous-hours")[i].textContent = `${jsonData[i].timeframes.weekly.previous}hrs`
      }
    })
    document.querySelector(".month").addEventListener("click", ()=> {
      for(let i = 0; i < jsonData.length; i++) {
        document.querySelectorAll(".current-hours")[i].textContent = `${jsonData[i].timeframes.monthly.current}hrs`

        document.querySelectorAll(".previous-hours")[i].textContent = `${jsonData[i].timeframes.monthly.previous}hrs`
      }
    })
  });
