// const url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals";

// async function getData() {
//   const response = await fetch(url);
//   const jsonData = await response.json();
//   console.log("json", jsonData);

//   const dropdownMenu = document.getElementById("animalDropdown");
//   const imageContainer = document.getElementById("imageContainer");

//   const defaultAnimal = jsonData.find((animal) => animal.name === "Dogs");
//   if (defaultAnimal) {
//     displayImage(defaultAnimal.image);
//     document.getElementById("dropdownMenuButton").innerText =
//       defaultAnimal.name;
//   }

//   dropdownMenu.innerHTML = "";

//   jsonData.forEach((animal) => {
//     const listItem = document.createElement("li");
//     const linkItem = document.createElement("a");
//     linkItem.className = "dropdown-item d-flex align-items-center";
//     linkItem.href = "#";
//     linkItem.addEventListener("click", () => {
//       displayImage(animal.image);
//       document.getElementById("dropdownMenuButton").innerText = animal.name;
//     });
//     const text = document.createTextNode(animal.name);
//     linkItem.appendChild(text);
//     listItem.appendChild(linkItem);
//     dropdownMenu.appendChild(listItem);
//   });

//   function displayImage(imageUrl) {
//     imageContainer.innerHTML = `<img src="${imageUrl}" style="max-width: 200px; max-height: 200px;">`;
//   }
// }

//  getData();
let url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals";

async function jsonimgchang() {
  const jfetch = await fetch(url);
  console.log("jfetch", jfetch);
  const respData = await jfetch.json();
  console.log("respData", respData);

  let select = document.getElementById("selectedData");
  let imgch = document.getElementById("imgg");
  imgch.src = respData[1].image;
  select.value = respData[1].image;

  for (let i = 0; i < respData.length; i++) {
    let oplist = document.createElement("option");
    oplist.innerHTML = respData[i].name;
    select.appendChild(oplist);
    oplist.value = respData[i].image;
  }
}
jsonimgchang();
let imgch = document.getElementById("imgg");
function imgchange(value) {
  imgch.src = value;
}
