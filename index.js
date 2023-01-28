// const content = document.querySelector('.content');
// let player = 'X'
// const winsCombin = [ [1, 2, 3],[4, 5, 6],[ 7, 8, 9],[1, 4, 7],[2, 5, 8],[ 3, 6, 9],[1, 5, 9],[3, 5, 7]];

// const stepX = [];
// const stepY = [];


// let murkUp ='';
// for (let i = 1; i <= 9; i++) {
//     murkUp += `<div class = "item" data-id ="${i}"></div>`;
    
// };



// content.innerHTML = murkUp;
// content.addEventListener('click', onClick);

// function onClick(e){

//     if(!e.target.classList.contains('item')){
//         return ;
//     }
//     console.log(e.target)
//     if(!e.target.textContent){
//     e.target.textContent = player;
//     player = player === 'X' ? '0' : 'X';


//     }
// };

const content = document.querySelector(".content");
let player = "X";
const winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let stepX = [];
let stepY = [];

let markup = "";
for (let i = 1; i <= 9; i += 1) {
  markup += `<div class = "item" data-id = "${i}"></div>`;
}

content.innerHTML = markup;

content.addEventListener("click", onClick);

function onClick(e) {
  if (!e.target.classList.contains("item")) {
    return;
  }
//   console.log(e.target);
  if (!e.target.textContent) {
    e.target.textContent = player;
    const iD = +e.target.dataset.id;

    if (player === "X") {
      stepX.push(iD);
      if(isWiner(stepX)){
       alert(" winer X ");
       endGame();
       return;
      }
    } else {
      stepY.push(iD);
      if(isWiner(stepY)){
        alert(" winer 0 ")
        endGame();
        return;

       }
    }
    console.log(stepX);
    console.log(stepY);
    // console.log(e.target.dataset);
    player = player === "X" ? "O" : "X";
  }
}

function isWiner(arr){
   const result = winCombinations.some(item => item.every(id => arr.includes(id)));
//    console.log(result);
 return result;
};

function endGame(){
    content.innerHTML = markup;
    player = "X";
    stepX = [];
    stepY = [];
};


