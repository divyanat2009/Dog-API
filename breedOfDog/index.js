
function renderDogImage(dogImage)
{
  if(!dogImage) //if false
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
      if(!response.ok) //if response.status != 200
      {
        return false;
      }
      else
      {
        return response.json();
      } 
    })
  .then(response => {
    if (!response) //if false
    { 
      renderDogImage(false) 
    } 
    else 
    { 
      renderDogImage(response.message) 
    }
   });
  
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
  
  
  
  