const customName = document.getElementById("customname"); //textbox
const randomize = document.querySelector(".randomize"); //button
const story = document.querySelector(".story"); //paragraph

function randomValueFromArray(array) {
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}
const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const places = ["the soup kitchen", "Disneyland", "the White House"];

const phrases = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
  let name = "Bob";
  if (customName.value !== "") {
    name = customName.value;
  }

  let weight;
  let temperature;
  if (document.getElementById("uk").checked) {
    weight = Math.round(300 / 14) + " stones";
    temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
  } else {
    weight = "300 pounds";
    temperature = "94 fehrenheit";
  }
  const randomName = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomPhrase = randomValueFromArray(phrases);

  story.textContent = `It was ${temperature} outside, so ${randomName} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomPhrase}. ${name} saw the whole thing, but was not surprised — ${randomName} weighs ${weight}, and it was a hot day.`;
  story.style.visibility = "visible";
}
