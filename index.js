const content = document.querySelector('.content');
let player = 'X'
const winsCombin = [ [1, 2, 3],[4, 5, 6],[ 7, 8, 9],[1, 4, 7],[2, 5, 8],[ 3, 6, 9],[1, 5, 9],[3, 5, 7]];



let murkUp ='';
for (let i = 1; i <= 9; i++) {
    murkUp += `<div class = "item" data-id ="${i}"></div>`;
    
};



content.innerHTML = murkUp;
content.addEventListener('click', onClick);

function onClick(e){

    if(!e.target.classList.contains('item')){
        return ;
    }
    console.log(e.target)
    if(!e.target.textContent){
    e.target.textContent = player;
    player = player === 'X' ? '0' : 'X';
    }
};



