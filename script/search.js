"use strict";

// Dat bien
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tBody = document.getElementById("tbody");
const findBtn = document.getElementById("find-btn");
const sidebarTitleEl = document.getElementById("sidebar-title");
const sidebarEl = document.getElementById("sidebar");
const petList = getFromStorage("pet-list") || [];
const petBreed = getFromStorage("breed-list") || [];

// Bo sung animation cho sidebar
sidebarTitleEl.addEventListener("click", function (e) {
    e.preventDefault();
    sidebarEl.classList.toggle("active");
});

// Ham hien thi du lieu
const renderTableData = function (petArr) {
    tBody.innerHTML = "";
    for (let i = 0; i < petArr.length; i++) {
        let vaccinatedText = petArr[i].vaccinated
            ? "bi bi-check-circle-fill"
            : "bi bi-x-circle-fill";
        let dewormedText = petArr[i].dewormed
            ? "bi bi-check-circle-fill"
            : "bi bi-x-circle-fill";
        let sterilizedText = petArr[i].sterilized
            ? "bi bi-check-circle-fill"
            : "bi bi-x-circle-fill";
        const row = document.createElement("tr");
        row.innerHTML = `<th scope="row">${petArr[i].id}</th>
<td>${petArr[i].name}</td>
<td>${petArr[i].age}</td>
<td>${petArr[i].type}</td>
<td>${petArr[i].weight} kg</td>
<td>${petArr[i].length} cm</td>
<td>${petArr[i].breed}</td>
<td>
<i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
</td>
<td><i class="${vaccinatedText}"></i></td>
<td><i class="${dewormedText}"></i></td>
<td><i class="${sterilizedText}"></i></td>
<td>${petArr[i].date}</td>
<td>`;
        tBody.appendChild(row);
    }
};
// Ham hien thi breed
const renderBreed = function (petBreed) {
    breedInput.innerHTML = `<option>Select Breed</option>`;
    for (let i = 0; i < petBreed.length; i++) {
        const option = document.createElement("option");
        option.innerHTML = `<option>${petBreed[i].breed}</option>`;
        breedInput.appendChild(option);
    }
};
renderBreed(petBreed);
// Bat su kien nut tim kiem
findBtn.addEventListener("click", function () {
    const idSearchValue = idInput.value.toLowerCase();
    const nameSearchValue = nameInput.value.toLowerCase();
    const typeSearchValue = typeInput.value;
    const breedSearchValue = breedInput.value;
    const vaccinatedSearch = vaccinatedInput.checked;
    const dewormedSearch = dewormedInput.checked;
    const sterilizedSearch = sterilizedInput.checked;
    const result = petList.filter((pet) => {
        if (idSearchValue) return pet.id.toLowerCase().includes(idSearchValue);
        if (nameSearchValue)
            return pet.name.toLowerCase().includes(nameSearchValue);
        if (typeSearchValue) return pet.type == typeSearchValue;
        if (breedSearchValue) return pet.breed == breedSearchValue;
        if (vaccinatedSearch) return pet.vaccinated == vaccinatedSearch;
        if (dewormedSearch) return pet.dewormed == dewormedSearch;
        if (sterilizedSearch) return pet.sterilized == sterilizedSearch;
    });
    console.log(result);
    renderTableData(result);
});
