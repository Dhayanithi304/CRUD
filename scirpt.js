//sample data to show initial records
let data = [
  { name: "Maiyle", age: 21 },
  { name: "Yashini", age: 20 },
];

function displayData() {
  const dataRows = document.getElementById("dataRows");
  dataRows.innerHTML = "";

  data.forEach((record, index) => {
    const row = `
            <tr>
                <td>${record.name}</td>
                <td>${record.age}</td>
               <td>
                    <button type="button" class="btn btn-info btn-sm edit-btn" data-index="${index}">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
                </td>
            </tr>
        `;

    dataRows.insertAdjacentHTML("beforeend", row);
  });
}

//funtion to handle form submission

function handleFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  if (name == "" || isNaN(age)) {
    alert("please fill in all the feilds correctly ");
  }

  //add data to the array
  data.push({ name, age });

  //clear form fields
  nameInput.value = "";
  ageInput.value = "";

  displayData();
}

//function to edit button click
function handleEditClick(event){
    const index = event.target.getAttribute("data-index");
    const record = data[index];
    
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    nameInput.value = record.name;
    ageInput.value = record.age;

    data.splice(index,1);
    displayData();
}

function handleDeleteClick(event){
    const index = event.target.getAttribute("data-index");
    data.splice(index,1);
    displayData();
}

document
  .getElementById("crudForm")
  .addEventListener("submit", handleFormSubmit);

document.getElementById("dataRows").addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete-btn")){
        handleDeleteClick(event);
    }else if(event.target.classList.contains("edit-btn")){
        handleEditClick(event);
    }
} )

displayData();