// TODO: add code here
let apiUrl = "https://handlers.education.launchcode.org/static/astronauts.json"

window.addEventListener("load", function() {
  fetch(apiUrl)
  .then(function(response) {
  response.json()
  .then(function(json) {
    console.log(json);
    let div = document.getElementById("container");
    for (i = 0; i < json.length; i++) {
      div.innerHTML += `
        <div class="astronaut">
          <div class="bio">
            <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
              <li>Hours in space: ${json[i].hoursInSpace}</li>
              <li>Active: ${json[i].active}</li>
              <li>Skills: ${json[i].skills.join(", ")}</li>
            </ul>
          </div>
          <img class="avatar" src="${json[i].picture}">
        </div>
      `;
        }
});
});
});
