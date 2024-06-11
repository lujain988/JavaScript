let form = document.getElementById("userForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  const data = { programmingLanguage: [] };
  formData.forEach((value, key) => {
    console.log(value);
    if (key === "programmingLanguage") data[key].push(value);
    else data[key] = value;
  });
  let allResponses = localStorage.allResponses;
  if (!allResponses) allResponses = [];
  else allResponses = JSON.parse(allResponses);
  allResponses.push(data);
  console.log(allResponses);
  localStorage.allResponses = JSON.stringify(allResponses);
});
