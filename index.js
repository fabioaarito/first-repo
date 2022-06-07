const clients = [
  {
    username: "frito",
    firstName: "Fábio",
    lastName: "Rito",
    age: 30,
    profession: "Software Engineer",
  },
  {
    username: "mcurie",
    firstName: "Marie",
    lastName: "Curie",
    age: 30,
    profession: "Scientist",
  },
  {
    username: "jdoe",
    firstName: "John",
    lastName: "Doe",
    age: 45,
    profession: "Singer",
  },
  {
    username: "rschmitd",
    firstName: "Roger",
    lastName: "Schimdt",
    age: 50,
    profession: "Team Head Coach",
  },
  {
    username: "anap",
    firstName: "Ana",
    lastName: "Perez",
    age: 34,
    profession: "Team Head Coach",
  },
  {
    username: "acdias",
    firstName: "Andreia",
    lastName: "Dias",
    age: 29,
    profession: "Psychologist",
  },
  {
    username: "joãovicente",
    firstName: "João",
    lastName: "Vicente",
    age: 53,
    profession: "Web Dev",
  },
];

document.querySelector("#clients-body").innerHTML = generateClientsTBody();

document
  .querySelector("form#new-client-form")
  .addEventListener("submit", createNewClient);

function generateClientsTBody() {
  let result = "";
  for (let i = 0; i < clients.length; i++) {
    result =
      result +
      `<tr>
      <td>
        <input type="radio" name="delete-input-radio" value="${i}"/>
      </td>
      <td> ${clients[i].username} </td>
      <td> ${clients[i].firstName} ${clients[i].lastName} </td>
      <td> ${clients[i].age} </td>
      <td> ${clients[i].profession} </td>
    </tr>`;
  }
  return result;
}

function createNewClient(event) {
  event.preventDefault();
  console.log(event);
  const form = event.target;
  const username = form.querySelector('input[name="username"]').value;
  const firstName = form.querySelector('input[name="firstName"]').value;
  const lastName = form.querySelector('input[name="lastName"]').value;
  const age = form.querySelector('input[name="age"]').value;
  const profession = form.querySelector('input[name="profession"]').value;
  let newClient = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    age: age,
    profession: profession,
  };
  clients.push(newClient);
  document.querySelector("#clients-body").innerHTML = generateClientsTBody();
}

document.querySelector("#delete-btn").addEventListener("click", deleteClient);
function deleteClient() {
  let selectedIndex;
  const deleteInputGroup = document.querySelectorAll(
    'input[name="delete-input-radio"]'
  );

  for (let i = 0; i < deleteInputGroup.length; i++) {
    if (deleteInputGroup[i].checked) {
      selectedIndex = deleteInputGroup[i].value;
    }
  }

  clients.splice(selectedIndex, 1);
  document.querySelector("#clients-body").innerHTML = generateClientsTBody();
}

document
  .querySelector('input[name="search-input"]')
  .addEventListener("input", search);
function search(event) {
  console.log("Searching...", event.target.value);
}
