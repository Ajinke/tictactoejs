const boxes=Array.from(document.getElementsByClassName('box'));
const playText=document.getElementById('playText');
const spaces=[];
const O_TXT='O';
const X_TXT='X';
currentPlayer='';


const drawBoard=()=>{
    boxes.forEach((box,index) => {
        let styleString='';
        if(index<3){
            styleString+='border-bottom:3px solid var(--purple);';

        }
        if(index%3==0){
            styleString+='border-right:3px solid var(--purple);';

        }
        if(index%3==2){
            styleString+='border-left:3px solid var(--purple);';

        }
        if(index>5){
            styleString+='border-top:3px solid var(--purple);';

        }
        box.style=styleString;
        box.addEventListener('click',boxClicked);
    });

};

const boxClicked=(e)=>{
    const id=e.target.id;
    console.log(id);
    if(!spaces[id]){
        spaces[id]=currentPlayer;
        e.target.innerText=currentPlayer;

        if(playerHasWon()){
            playText.innerText=`${currentPlayer}has won`;
            return;
        }
        currentPlayer=currentPlayer==O_TXT ?X_TXT:O_TXT;
    }
};
const playerHasWon=()=>{
    if(spaces[0]==currentPlayer){
        if(spaces[1]==currentPlayer&&spaces[2]==currentPlayer){
            console.log(`${currentPlayer}has won`);
            return true;
        }
        if(spaces[4]==currentPlayer&&spaces[8]==currentPlayer){
            console.log(`${currentPlayer}has won`);
            return true;
        }
        if(spaces[3]==currentPlayer&&spaces[6]==currentPlayer){
            console.log(`${currentPlayer}has won on the left`);
            return true;
        }
      }
        if(spaces[8]==currentPlayer) {
            if(spaces[7]==currentPlayer&&spaces[6]==currentPlayer){
                console.log(`${currentPlayer}has won`);
                return true;
            }
            if(spaces[5]==currentPlayer&&spaces[2]==currentPlayer){
                console.log(`${currentPlayer}has won`);
                return true;
            }
        else if(spaces[4]==currentPlayer) {
                if(spaces[1]==currentPlayer&&spaces[7]==currentPlayer){
                    console.log(`${currentPlayer}has won`);
                    return true;
                }
                if(spaces[3]==currentPlayer&&spaces[5]==currentPlayer){
                    console.log(`${currentPlayer}has won`);
                    return true;
                }
                if(spaces[2]==currentPlayer&&spaces[6]==currentPlayer){
                    console.log(`${currentPlayer}has won`);
                    return true;
                }
        }
        
    }
};

const restart = () =>{
    spaces.forEach((spaces,index)=>{
        spaces[index]=null;
    });
    boxes.forEach((box)=>{
        box.innerText='';
    });
    
    playText.innerText=`Lets play!`;
    currentPlayer=O_TXT;

};
restartBtn.addEventListener('click',restart);
restart();
drawBoard();