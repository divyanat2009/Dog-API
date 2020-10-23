
function renderDogImage(dogImage)
{
  if(!dogImage) 
  {
    $("#breedNameDiv").html(`<h2><font color="red">Breed not found!</font></h2>`);
    return;
  }
  $("#breedNameDiv").html(`<img src=${dogImage}>`);
}

function dogImageByBreed(userInput) {
  fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
  .then(response =>
    {
      if(!response.ok) 
      {
        return false;
      }
      else
      {
        return response.json();
      } 
    })
  .then(response => {
    if (!response) 
    { 
      renderDogImage(false) 
    } 
    else 
    { 
      renderDogImage(response.message) 
    }    
   })
  .catch(error=> alert('Something went wrong. Try again later.'));
  
  }

  function submitForm(){
    $('#dogForm').submit((e)=>{
    e.preventDefault();
    let userInput = $("#breedNameInput").val();
    dogImageByBreed(userInput);
  })
}
  //Default function required by jQuery
  function init()
  {
    submitForm();
  }

  $(init);
  
  
  
  