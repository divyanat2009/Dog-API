 function submitForm(){
    $('#dogForm').submit((e)=>{
      e.preventDefault();
      let userInput=$("#numOfDogsInput").val();  
      if(userInput < 1){
        alert("Please enter a valid number");
        return;
      }
      fetchDogs(userInput);
    })
  }

  function renderNumberOfDogs(numofDogs)
  {
      $('#numOfDogs').html("");
      $('#results').text("Check your result below:");
      numofDogs.forEach(element => {
        $('#numOfDogs').append(`<li><img src=${element}></li>`)
      });
  }
  
  function fetchDogs(userInput)
  {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response=>response.json())
    .then(response=>renderNumberOfDogs(response.message))
    .catch(err=> alert(err));
  }

function init() {
    submitForm();
}

$(init);
    
    
    