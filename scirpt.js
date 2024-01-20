let data = [];

function displayData() {
  const tbodyData = document.getElementById("tbodyData");
  tbodyData.innerHTML = "";

  data.forEach((record, index) => {
    const row = `
    <tr>
      <td>${record.name}</td>
      <td>${record.age}</td>
      <td>${record.email}</td>
      <td>
        <button class="btn btn-success edit-btn" data-index="${index}">Edit</button>
        <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
      </td>
    </tr>
    `;
    tbodyData.insertAdjacentHTML("beforeend", row);
  });
}

function submitFunction(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const emailInput = document.getElementById("email");

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);
  const email = emailInput.value.trim();

  if (name == "" || isNaN(age) || email == "") {
    alert("Fill the all details below asked");
    return false;
  }

  data.push({ name, age, email });

  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";

  displayData();
}

function editBtn(event) {
  const index = event.target.getAttribute("data-index");
  const record = data[index];

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const emailInput = document.getElementById("email");

  nameInput.value = record.name;
  ageInput.value = record.age;
  emailInput.value = record.email;

  data.splice(index, 1);
  displayData();
}

function deleteBtn(event) {
  const index = event.target.getAttribute("data-index");
  data.splice(index, 1);
  displayData();
}

document.getElementById("tbodyData").addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    editBtn(event);
  } else if (event.target.classList.contains("delete-btn")) {
    deleteBtn(event);
  }
});

document.getElementById("crudForm").addEventListener("submit", submitFunction);

displayData();
