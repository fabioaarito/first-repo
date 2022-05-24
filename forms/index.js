const locations = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegowina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, the Democratic Republic of the",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia (Hrvatska)",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "France Metropolitan",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard and Mc Donald Islands",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic of",
  "Korea, Republic of",
  "Kuwait",
  "Kyrgyzstan",
  "Lao, People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia (Slovak Republic)",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "Spain",
  "Sri Lanka",
  "St. Helena",
  "St. Pierre and Miquelon",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen Islands",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan, Province of China",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna Islands",
  "Western Sahara",
  "Yemen",
  "Yugoslavia",
  "Zambia",
  "Zimbabwe",
  "Palestine",
];

const categories = [
  "Climate Change",
  "Pollution",
  "The Relationship between Education and Child Labor",
  "Violence",
  "Security and Well Being",
  "Lack of Education",
  "Poverty",
  "Inequality",
  "Terrorism",
  "Child Marriages:",
  "Food",
  "Unemployment",
  "Government Corruption",
  "Pandemic",
  "Refugees",
];

const globalIssues = [];

updateIssuesList();

function populateLocationDatalist() {
  let locationOptionsHtml = "";
  for (let i = 0; i < locations.length; i++) {
    locationOptionsHtml += `<option value="${locations[i]}">${locations[i]}</option>`;
  }
  document.querySelector("#locationDataList").innerHTML = locationOptionsHtml;
}

function populateCategories() {
  let categoryOptionsHtml = "";
  for (let i = 0; i < categories.length; i++) {
    categoryOptionsHtml += `<option value="${categories[i]}">${categories[i]}</option>`;
  }
  document.querySelector('select[name="categories-select"]').innerHTML =
    categoryOptionsHtml;
}

populateLocationDatalist();
populateCategories();

document
  .querySelector("#new-issue-form")
  .addEventListener("submit", addNewIssue);

function addNewIssue(event) {
  event.preventDefault();

  // Ir buscar a informação do form
  const form = event.target;

  const title = form.querySelector("#input-title").value;
  const description = form.querySelector('textarea[name="description"]').value;
  const location = form.querySelector('input[name="location"]').value;
  const category = form.querySelector('select[name="categories-select"]').value;
  const newIssue = {
    title: title,
    description: description,
    location: location,
    category: category,
  };
  // Adicionar ao array de issues
  globalIssues.push(newIssue);

  updateIssuesList();
}

function updateIssuesList() {
  if (globalIssues.length === 0) {
    document.querySelector("#issues-list-group").innerHTML =
      "<caption>No issues found!</caption>";
    return;
  }
  let html = "";
  for (let i = 0; i < globalIssues.length; i++) {
    const issue = globalIssues[i];
    html += `<a
    href="#"
    class="list-group-item list-group-item-action"
    aria-current="true"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${issue.title}</h5>
      <small>${issue.category}</small>
    </div>
    <p class="mb-1">${issue.description}</p>
    <small>${issue.location}</small>
  </a>`;
  }

  document.querySelector("#issues-list-group").innerHTML = html;
}
