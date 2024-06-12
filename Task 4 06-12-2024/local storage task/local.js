document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
  event.preventDefault();
  let myData1 = {
    Name: document.getElementById("Name").value,
    Age: document.getElementById("Age").value,
    Gender: document.getElementById("Gender").value,
    Birthdate: document.getElementById("Birthdate").value,
    Image: document.getElementById("Image").value,
  };
  localStorage.setItem("myData1", JSON.stringify(myData1));
  let myData2 = {
    Description: document.getElementById("Description").value,
    Major: document.getElementById("Major").value,
    Programming: [],
  };
  if (document.getElementById("checkboxhtml").checked) {
    myData2.Programming.push("HTML");
  }
  if (document.getElementById("checkboxcss").checked) {
    myData2.Programming.push("CSS");
  }
  if (document.getElementById("checkboxjs").checked) {
    myData2.Programming.push("JS");
  }
  localStorage.setItem("myData2", JSON.stringify(myData2));
  let myData3 = {
    Siblings: document.getElementById("Siblings").value,
    DiscSib: document.getElementById("DiscSib").value,
  };
  localStorage.setItem("myData3", JSON.stringify(myData3));
});
