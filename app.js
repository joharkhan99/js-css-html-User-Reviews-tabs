// sample reviews
const reviews = [
  {
    id: 1,
    name: "jona marlin",
    job: "Designer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at."
  },
  {
    id: 2,
    name: "jona marlin",
    job: "Engineer",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen."
  },
  {
    id: 3,
    name: "jona marlin",
    job: "Doctor",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest."
  },
  {
    id: 4,
    name: "jona marlin",
    job: "Student",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed."
  },
]

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// select buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set strting item
let currentItem = 0;

// load initial item/review on start load
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
  if (currentItem > 0) {
    currentItem--;
    showPerson(currentItem);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentItem < reviews.length - 1) {
    currentItem++;
    showPerson(currentItem);
  }
});

randomBtn.addEventListener('click', () => {
  let randNum = parseInt(Math.random() * reviews.length);
  currentItem = randNum;
  showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

