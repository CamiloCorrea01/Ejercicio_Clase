(()=>{
  fetch('http://localhost:3000/restaurants')
    .then( data => data.json())
    .then( data => console.log(data))   
    .catch(err=>console.log(err))
})();

document.querySelector("#btnSend").addEventListener('click',()=>{
  const id = document.querySelector('#idRst').value 

  const name = document.querySelector('#nameRst').value 

  const city = document.querySelector('#city').value

  const data = {id:id,name:name,city:city}

  const URL = "http://localhost:3000/restaurants"

  fetch(URL,{
    'method' : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(data)
  }).then( resp => resp.json())
  .then( data => console.log(data))
  .catch( err => console.log(err))
})