 function submitForm(){
    $('#dogForm').submit((e)=>{
      e.preventDefault();
      let userInput=$("#numOfDogsInput").val();  
      fetchDogs(userInput);
    })
  }

  function renderNumberOfDogs(numofDogs)
  {
      numofDogs.forEach(element => {
        $('#numOfDogs').append(`<li><img src=${element}></li>`)
      });
  }
  
  function fetchDogs(userInput)
  {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response=>response.json())
    .then(response=>renderNumberOfDogs(response.message));
  }

function init() {
    submitForm();
}

$(init);
    
    
    