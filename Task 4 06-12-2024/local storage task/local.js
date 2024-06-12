
document.getElementsByTagName ("form")[0].addEventListener("submit",event=>{
  event.preventDefault()
      let obj={
          name:document.getElementById("name").value,
          age:document.getElementById("age").value,
         Gender: document.getElementById("gender").value,
         BirthDate :document.getElementById("birthdate").value,
         YourImage:document.getElementById("image").value,
         Description:document.getElementById("description").value,
         major:document.getElementById("major").value,
         programmingLanguages:[],
         
         siblingnumber:document.getElementById("siblings").value,
         descriptionOfSiblings:document.getElementById("desofs").value,



         
      }
    
      if(document.getElementById("html").checked ) 
      {obj.programmingLanguages.push("HTML")}  
      if(document.getElementById("css").checked ) 
      {obj.programmingLanguages.push("CSS")}  
      if(document.getElementById("js").checked ) 
      {obj.programmingLanguages.push("js")}  
      
      

  localStorage.setItem("my data",JSON.stringify(obj))

})