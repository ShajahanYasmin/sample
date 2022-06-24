let tbody;
let row;
let cell1;
let cell2;
function validation(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const image = document.getElementById("imgLink").value;
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  const radio = document.querySelector('input[type="radio"]:checked');
  const checklist = [];
  for (let i of checkbox) checklist.push(i.value);
  tbody = document.getElementById("table1").tBodies[0];
  row = tbody.insertRow(-1);
  cell1 = row.insertCell(-1);
  cell2 = row.insertCell(-1);
  cell1.innerHTML = `<td class="desc">
    <ul class="list">
      <li class="list__item">${name}</li>
      <li class="list__item">${radio.value}</li>
      <li class="list__item">${email}</li>
      <li class="list__item">
        <a href="${website}" target="_blank">${website}</a>
      </li>
      <li class="list__item">${checklist.join(",")}</li>
    </ul>
  </td>`;
  cell2.innerHTML = `<td><img src="${image}" alt="person image" class="img" />
  </td>`;
}

const form = document.querySelector("form");

form.addEventListener("submit", validation);
