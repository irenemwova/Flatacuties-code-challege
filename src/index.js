document.addEventListener('DOMContentLoaded', function () {
  const baseUrl = 'http://localhost:3000';
  const apiUrl = `${baseUrl}/characters`;

  // Function to fetch character data and display character names
  function fetchCharactersAndDisplayNames() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Check Your Internet Connection');
        }
        return response.json();
      })
      .then(data => {
        const characterBar = document.getElementById('character-bar');
        characterBar.innerHTML = ''; // Clear existing content

        data.forEach(character => {
          const characterNameSpan = document.createElement('span');
          characterNameSpan.textContent = character.name;
          characterNameSpan.classList.add('character-name'); // Add a class for styling and event handling
          characterBar.appendChild(characterNameSpan);
        });

        // Add event listener to character names
        const characterNames = document.querySelectorAll('.character-name');
        characterNames.forEach(name => {
          name.addEventListener('click', function () {
            const characterName = this.textContent;
            displayCharacterDetails(characterName, data);
          });
        });
      })
      .catch(error => {
        console.error('There was a problem fetching characters:', error);
      });
  }

  // Function to display character details in the div#detailed-info
  function displayCharacterDetails(characterName, characterData) {
    const character = characterData.find(char => char.name === characterName);

    if (character) {
      const nameElement = document.getElementById('name');
      const imageElement = document.getElementById('image');
      const voteCountElement = document.getElementById('vote-count');

      nameElement.textContent = character.name;
      imageElement.src = character.image;
      imageElement.alt = character.name;
      voteCountElement.textContent = character.votes;

      // Add event listener to the votes form
      const votesForm = document.getElementById('votes-form');
      votesForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const votesInput = document.getElementById('votes');
        const votes = parseInt(votesInput.value);
        if (!isNaN(votes)) {
          character.votes += votes;
          voteCountElement.textContent = character.votes;
        } else {
          console.error('Please enter a valid number of votes.');
        }
        // Reset the votes input
        votesInput.value = '';
      });
    } else {
      console.error(`Character '${characterName}' not found in the character data.`);
    }
  }

  // Fetch characters and display their names when the page loads
  fetchCharactersAndDisplayNames();
});
