console.log("Olá João!!!");

const formacoes = [
  {
    name: "phc-1",
    title: "PHC 1",
    subFormacoes: [
      {
        name: "formacao-a",
        title: "phc A",
        link: "",
      },
      {
        name: "formacao-b",
        title: "phc B",
      },
      {
        name: "formacao-c",
        title: "phc C",
      },
      {
        name: "formacao-d",
        title: "phc D",
      },
    ],
  },
  {
    name: "contabilidade-2",
    title: "Contabilidade 2",
    subFormacoes: [
      {
        name: "contabilidade-E",
        title: "Contabilidade E",
      },
      {
        name: "contabilidade-f",
        title: "Contabilidade F",
      },
      {
        name: "contabilidade-g",
        title: "Contabilidade G",
      },
      {
        name: "contabilidade-h",
        title: "Contabilidade H",
      },
    ],
  },
];

registerInputSearch();

function registerInputSearch() {
  const inputElement = document.querySelector('input[name="search-input"]');

  inputElement.addEventListener("input", onSearch);
}

function onSearch(event) {
  console.log("searching...");
  const value = event.target.value;
  if (!value) {
    document.querySelector(".search-elements-container").innerHTML = "";
    return;
  }
  let html = "";
  for (let i = 0; i < formacoes.length; i++) {
    if (formacoes[i].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
      html =
        html +
        `<div id="${formacoes[i].name}">
        <a href="#"><h5>${formacoes[i].title}</h5></a>
      </div>`;
    }
  }

  document.querySelector(".search-elements-container").innerHTML = html;
}

const message = "My name is João!";
