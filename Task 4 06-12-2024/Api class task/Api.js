const url = "https://66681676f53957909ff67af8.mockapi.io/users/Students";
async function getData() {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log("json", jsonData);
  var x = jsonData[4].name;
  console.log(x);
  var y = jsonData[4].id;
  console.log(y);
  document.getElementById("exampleInputEmail1").value = x;

  document.getElementById("exampleInputPassword1").value = y;
}
getData();
