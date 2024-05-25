let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#b1");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;
let count = 0;
const winPatterns = 
    [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
;
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked")
        
        if(turn0){
            box.innerText ='0';
            turn0=false;
        }
        else {
            box.innerText='X';
            turn0=true
        }
        box.disabled=true;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner()){
            gameDraw();
        } ;        
        //box.innerText='O';

    });   
});
const gameDraw = () => {
    msg.innerText = `Game  goes draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! , The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
checkWinner = () =>{
 for (let patterns of winPatterns)  {
    //console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]],boxes[patterns[3]],boxes[patterns[4]],boxes[patterns[5]],boxes[patterns[6]],boxes[patterns[7]],boxes[patterns[8]]);

        //boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText,boxes[patterns[3]].innerText,boxes[patterns[4]].innerText,boxes[patterns[5]].innerText,boxes[patterns[6]].innerText,boxes[patterns[7]].innerText,boxes[patterns[8]].innerText)
        let pos0val = boxes[patterns[0]].innerText;
        let pos1val = boxes[patterns[1]].innerText;
        let pos2val = boxes[patterns[2]].innerText;

        if(pos0val !="" && pos1val != "" && pos2val != "") {
            if(pos0val ===  pos1val && pos1val==  pos2val) {
                showWinner(pos1val);
                return true;
            }
        }

 }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);