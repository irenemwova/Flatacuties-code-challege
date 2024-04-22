// Your code here
// Base URL for the API
const BASE_URL = 'http://localhost:3000';

// Endpoint for retrieving character data
const CHARACTER_ENDPOINT = '/characters';

// Function to fetch character data and display character names
function fetchAndDisplayCharacters() {
    // Fetch character data from the server
    fetch(BASE_URL + CHARACTER_ENDPOINT)
        .then(response => response.json())
        .then(characters => {
            // Get the character-bar div element
            const characterBar = document.getElementById('character-bar');

            // Clear any existing content in character-bar
            characterBar.innerHTML = '';

            // Iterate over each character data
            characters.forEach(character => {
                // Create a span element for each character
                const characterSpan = document.createElement('span');
                characterSpan.textContent = character.name;

                // Add the span element to the character-bar div
                characterBar.appendChild(characterSpan);
            });
        })
        .catch(error => console.error('Error fetching characters:', error));
}
// // Function to display character details
// function displayCharacterDetails(character) {
//     // Get the detailed-info div element
//     const detailedInfoDiv = document.getElementById('detailed-info');

//     // Clear any existing content in detailed-info
//     detailedInfoDiv.innerHTML = '';

//     // Create and display character details
//     const characterNameHeading = document.createElement('h2');
//     characterNameHeading.textContent = character.name;

//     const characterDescriptionParagraph = document.createElement('p');
//     characterDescriptionParagraph.textContent = character.description;

//     detailedInfoDiv.appendChild(characterNameHeading);
//     detailedInfoDiv.appendChild(characterDescriptionParagraph);
// }

// // Call the function to fetch and display characters when the page loads
// window.addEventListener('load', fetchAndDisplayCharacters);


// // Function to handle form submission
// function handleFormSubmission(event) {
//     event.preventDefault();

//     // Get the input field for number of votes
//     const votesInput = document.getElementById('votes-form');

//     // Get the value of number of votes from the input field
//     const votes = parseInt(votesInput.value);

//     // Reset the input field
//     votesInput.value = '';

//     // Get the element displaying character's votes
//     const votesDisplay = document.getElementById('character-votes');

//     // Update the number of votes
//     const currentVotes = parseInt(votesDisplay.textContent);
//     const totalVotes = currentVotes + votes;
//     votesDisplay.textContent = totalVotes;
// }

// // Add event listener to the form for form submission
// const votesForm = document.getElementById('votes-form');
// votesForm.addEventListener('submit', handleFormSubmission);
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and character info elements
    const votesForm = document.getElementById('votes-form');
    const detailedInfo = document.getElementById('detailed-info');
  
    // Add event listener to the form submit event
    votesForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get the number of votes from the input field
      const votesInput = document.getElementById('votes-input');
      const votes = parseInt(votesInput.value); // Convert the input value to an integer
  
      // Update the total number of votes for the character
      const currentVotes = parseInt(detailedInfo.textContent);
      detailedInfo.textContent = currentVotes + votes;
  
      // Reset the input field value
      votesInput.value = '';
    });
  });
  
