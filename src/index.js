function generateStory(event) {
  event.preventDefault();

  new Typewriter('#child-story', {
    strings: 'Story Here',
    autoStart: true,
    delay: 25,
    cursor: '',
  });
  storyElement.innerHTML = 'Story here';
}

let storyFormElement = document.querySelector('#story-generator-form');
storyFormElement.addEventListener('submit', generateStory);
