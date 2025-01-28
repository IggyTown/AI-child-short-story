function displayStory(response) {
  new Typewriter("#child-story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "3cc25b050436a2462365bo90t67a8f38";
  let context =
    "You are a short-story telling AI assistant. Provide interesting, polite, short and fun stories for children that are no more than fifteen lines. Make sure to follow the user instructions. Include the title for the story inside a <strong> element at the start of the story and seperate it from the story with a <br />";
  let prompt = `User instructions: Generate a short story for a child ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
