let boxs=document.querySelectorAll('.box');
let p1=document.querySelector('.player1');
let span1=document.querySelector('.player1 span');
let span2=document.querySelector('.player2 span');
let p2=document.querySelector('.player2');
let click='X';
let player1=false;
let player2=false;
let count=0;

let tab=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
for(let i=0 ; i<boxs.length ; i++){
    boxs[i].addEventListener('click',game);
};

function game(){
    if(this.classList.contains('active2') || this.classList.contains('active1') ){
        return;
    }else if(click === 'X'){
        this.classList.add('active1');
        this.innerText=click;
        console.log(this);
    }else if(click === 'O'){
        this.classList.add('active2');
        this.innerText=click;
    }
    if(click === 'O'){
        click='X';
    }else{
        click='O';
    }
    if(!player1 && !player2){
    for(let i=0 ;i <=tab.length-1 ;i++){
        if(boxs[tab[i][0]].innerHTML === 'X' && boxs[tab[i][1]].innerHTML === 'X' && boxs[tab[i][2]].innerHTML ==='X'){
            player1 = true;
           p1.classList.add('active');
            break;
        }else if(boxs[tab[i][0]].innerHTML === 'O' && boxs[tab[i][1]].innerHTML === 'O' && boxs[tab[i][2]].innerHTML ==='O'){
            player2=true;
            p2.classList.add('active');
            break;
        }else if(count === 8 && player1 === false && player2 ===false){
            console.log('game over personne a ganier la partie');
            break;
            }
        }
    }
    count++;
    if(player1 || player2 || count === 9){
        removeEventListener('click',game);      
    } 
}

span2.addEventListener('click',function(){
  if(  p2.classList.contains('active')){
    p2.classList.remove('active');
  }else{
      return;
  }
  console.log('click2');
});

span1.addEventListener('click',function(){
    if(  p1.classList.contains('active')){
      p1.classList.remove('active');
    }else{
        return;
    }
    console.log('click2');
  })