let toggleModeBtn = document.getElementById("toggle-mode-btn");

toggleModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");});



function Article(headingText, imageSrc, paragraphText) {
  this.container = document.getElementById("article");
  this.heading = document.createElement("a");
  this.image = document.createElement("img");
  this.paragraph = document.createElement("p");

  this.image.src = imageSrc;
  this.image.width = 380;
  this.image.height = 420;

  this.image.style.cssText = `  border: 5px solid rgb(134, 164, 193);  border-radius: 10px;
`;
  this.paragraph.style.cssText = `padding:30px;text-align:center;margin-bottom:50px;width:450px;font-size:25px`;
  this.heading.style.cssText = `padding:30px;text-align:center;`;

  this.heading.textContent = headingText;
  this.paragraph.textContent = paragraphText;

  this.container.appendChild(this.heading);
  this.container.appendChild(this.image);
  this.container.appendChild(this.paragraph);
}

let Article1 = new Article(
  "Click to help Canada's forests",
  "./images/forest.jpeg",
  "Canada has about 9% of the world's forests. · Only 3% of all wildland fires that start each year in Canada grow to more than 200 hectares in area.Abundant natural resources make Canada a prime location for forward-thinking companies looking for advanced R&D and world-class expertise in energy, minerals and metals, forestry, geoscience and sustainable resource management."
);
let Article2 = new Article(
  "Click to help Clean up the plastic from the oceans, seas & rivers.",
  "./images/plastic.jpg",
  "Take action on plastic waste & help to prevent 50% of new ocean plastic,Make a difference by removing lionfish,an invasive species decimating reef ecosystems. Learn to dive while culling lionfish."
);
let Article3 = new Article(
  "Click Amazon Rain Forest Conservation",
  "./images/saving-the-amazon.avif",
  "The fate of the Amazon and the countless animals and plant species, along with the people who live there, rely on reforestation effortsReforestation is a key action to help mitigate the effects of climate change, as new trees help reduce the amount of CO2 in the air and also limit erosion."
);

let Article4 = new Article(
  "Animal Release Center, Eco-Supporter",
  "./images/anmal.jpeg",
  "Join our group of Eco-Volunteers and help out in various projects, ranging from creative projects to gardening and mammal monitoring.FreeWildlifeBrazil Celine (Animal Release Center) has partnered with IPBio (Biodiversity Research Institute), an NGO that also works on the Betary Reserve with whom we cooperate closely, to develop a joint volunteer program. "
);

function addVideo(sourceUrl) {
  const video = document.getElementById("video");
  video.src = "/assets/114103169-icecaps-iceberg-melting-space-.mp4";
  video.controls = true;
  //videoId.appendChild(video);
}
addVideo();

//Article1.heading.innerHTML = '<a href="www.google.com">h3</a>';
Article1.heading.setAttribute("href", " www.google.com");
Article2.heading.setAttribute("href", " www.google.com");
Article3.heading.setAttribute("href", " www.google.com");
Article4.heading.setAttribute("href", " www.google.com");
