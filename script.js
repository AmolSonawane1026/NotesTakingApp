const addNoteBtn = document.querySelector(".addNote");
const notesContainer = document.querySelector(".notesContainer");
// ===========

addNoteBtn.addEventListener("click", () => {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let iTag = document.createElement("i");
  iTag.setAttribute("class", "fa-solid fa-trash");
  // ====================

  let textArea = document.createElement("textarea");
  textArea.setAttribute("class", "input");
  textArea.placeholder = "Write Something!...";
  textArea.spellcheck = false;

  // -------------------------------

  card.appendChild(iTag);
  card.appendChild(textArea);
  // card.innerHTML = `
  // <i class="fa-solid fa-trash"></i>
  // <textarea name="text" id="text" placeholder="Write Something!..."  spellcheck="false"></textarea>
  // `

  notesContainer.appendChild(card);

  iTag.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    // saveData();
  });
  // saveData()
});

// let saveData = () => {
//   localStorage.setItem("data", notesContainer.innerHTML);
//   localStorage.setItem("cardData",cardData.innerHTML)
// };

// let getData = () => {
//   notesContainer.innerHTML = localStorage.getItem("data");
//   cardData.innerHTML = localStorage.getItem("cardData")
// };

// getData();
