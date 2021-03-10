'use strict';

// OBJECT DATA

const imgObj = [{
    title: "Bald Eagle",
    description: "A bald eagle in a tree looking out",
    width: 400,
    height: 400,
    pathURL: "assets/images/baldeagle.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Bald_eagle",
    credit: "mana5280",
    creditURL: "https://unsplash.com/@mana5280?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    title: "Deer",
    description: "A herd of deer standing in a forest",
    width: 400,
    height: 400,
    pathURL: "assets/images/deer.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Deer",
    credit: "Saif Rahman",
    creditURL: "https://unsplash.com/@me_saif?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    title: "Flamingo",
    description: "A flamingo standing in water",
    width: 400,
    height: 400,
    pathURL: "assets/images/flamingo.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Flamingo",
    credit: "Alejandro Contreras",
    creditURL: "https://unsplash.com/@atrialis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    title: "Lion",
    description: "A male lion's face fills the frame",
    width: 400,
    height: 400,
    pathURL: "assets/images/lion.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Lion",
    credit: "Joshua J. Cotten",
    creditURL: "https://unsplash.com/@jcotten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    title: "Orangutan",
    description: "An orangutan sitting on a wooden post looking down",
    width: 400,
    height: 400,
    pathURL: "assets/images/orangutan.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Orangutan",
    credit: "Dawn Armfield",
    creditURL: "https://unsplash.com/@darmfield?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    title: "Owl",
    description: "An owl sitting at a tree staring menacingly",
    width: 400,
    height: 400,
    pathURL: "assets/images/owl.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Owl",
    credit: "mana5280",
    creditURL: "https://unsplash.com/@mana5280?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    title: "Penguin",
    description: "A penguin standing on a breakwater",
    width: 400,
    height: 400,
    pathURL: "assets/images/penguin.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Penguin",
    credit: "Johann Botha",
    creditURL: "https://unsplash.com/@witbrood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    title: "Sheep",
    description: "A big fluffy sheep looking proud of itself",
    width: 400,
    height: 400,
    pathURL: "assets/images/sheep.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Sheep",
    credit: "Maurice Smeets",
    creditURL: "https://unsplash.com/@mauricesmeets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    title: "Tiger",
    description: "A white tiger baring it's teeth",
    width: 400,
    height: 400,
    pathURL: "assets/images/tiger.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Tiger",
    credit: "Art-house Studio",
    creditURL: "https://unsplash.com/@arthousestudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
]


// Defining the initial container that the first append will be placed onto.

const container = document.querySelector('.container');

// For loop that generates the gallery.

for (let i = 0; i < imgObj.length; i++) {

  // Creating the figure to contain all the object content.

  const figure = document.createElement('figure');    
  container.appendChild(figure);  

  // Title for each image.

  const title = document.createElement('h2');
  title.innerText = `${imgObj[i].title}`;
  figure.appendChild(title);

  // Creating the link for the images.
  
  const figLink = document.createElement('a');
  figLink.href = `${imgObj[i].linkURL}`;
  figLink.target = "_blank";
  figLink.rel = "noopener noreferrer";
  figure.appendChild(figLink);

  // Creating image and linking the source and adding alt text for accessability.

  const figLinkImg = document.createElement('img');
  figLinkImg.src = `${imgObj[i].pathURL}`;
  figLinkImg.alt = `${imgObj[i].description}`;

  // Wasn't sure of a better way to include width and height as I know inline styling isn't best practice.
  figLinkImg.style.maxWidth = `${imgObj[i].width}px`;
  figLinkImg.style.maxHeight = `${imgObj[i].height}px`;
  figLink.appendChild(figLinkImg);

  // Adding fig caption with credit to photographer and linking to their unsplash page.

  const figCap = document.createElement('figcaption');
  figure.appendChild(figCap);
  const figCapLink = document.createElement('a');
  figCapLink.href = `${imgObj[i].creditURL}`;
  figCapLink.target = "_blank";
  figCapLink.rel = "noopener noreferrer";
  figCapLink.innerText = `Photo by: ${imgObj[i].credit}`;
  figCap.appendChild(figCapLink);  
}