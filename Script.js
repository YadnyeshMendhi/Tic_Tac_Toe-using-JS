    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector("#resetBtn");
    let newGameBtn = document.querySelector("#new-btn");
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg");


    let turn0 = true;

    const winPatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ];

    boxes.forEach((box) => {
        box.addEventListener("click" , () => {
            console.log("Button was clicked");

            if(turn0){
                box.innerText = "0";
                turn0 = false;
            }
            else{
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true;

            checkWinner();
        })
    });

    //Arrow Function
    const resetGame = () => {
        turnO = true;
        count = 0;
        enableBoxes();
        msgContainer.classList.add("hide");
      };
      

    const gameDraw = () => {
        msg.innerText = `Game was a Draw.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
      };
      
      const disableBoxes = () => {
        for (let box of boxes) {
          box.disabled = true;
        }
      };
      
      const enableBoxes = () => {
        for (let box of boxes) {
          box.disabled = false;
          box.innerText = "";
        }
      };

      
    const showWinner = (winner) => {
        //msg.innerText = `Congratulations, winner is ${winner}`;
        document.querySelector("#msg");
        alert(`Congratulations, winner is ${winner}`);
        msgContainer.classList.remove("hide");
    } 

    const checkWinner = () => {
        for(let pattern of winPatterns){
           let post1val = boxes[pattern[0]].innerText;
           let post2val = boxes[pattern[1]].innerText;
            let post3val = boxes[pattern[2]].innerText;

            if(post1val != "" && post2val != "" && post3val != ""){
                if(post1val === post2val && post2val === post3val){
                    showWinner(post1val);
                    return true;
                }
            }
        }

       
    };


    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);


