const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");

const startBtn = document.querySelector(".start");
localStorage.setItem("btn", "focus");


const focusTime = document.querySelector("#focusTime");
const breakTime = document.querySelector("#breakTime");
//----
// localStorage.setItem("TaskNumber", TaskNumber.value);
//----
let initial, totalsecs, perc, paused, mins, seconds;
var btnn ;
startBtn.addEventListener("click", () => {
  // console.log("Focus mode");
  let btn = localStorage.getItem("btn");
  btnn= btn;
  // console.log(btn);
  if (btn === "focus") {
    // console.log("Focus time " + localStorage.getItem("focusTime"));
    mins = +localStorage.getItem("focusTime") || 1;
  } else {
    // console.log("Break time " + localStorage.getItem("breakTime"));
    // localStorage.setItem("btn", "break");
    mins = +localStorage.getItem("breakTime") || 1;
  }

  seconds = mins * 60;
  totalsecs = mins * 60;
  setTimeout(decremenT(), 60);
  startBtn.style.transform = "scale(0)";
  paused = false;
});

function decremenT() {
  mindiv.textContent = Math.floor(seconds / 60);
  secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if (circle.classList.contains("danger")) {
    circle.classList.remove("danger");
  }

  if (seconds > 0) {
    perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
    setProgress(perc);
    seconds--;
    initial = window.setTimeout("decremenT()", 1000);
    if (seconds < 10) {
      circle.classList.add("danger");
    }
  }
  else {
    mins = 0;
    seconds = 0;
    bell.play();
    var taskNum = document.querySelector(".taskNum");
    var taskCon = document.querySelector(".taskCon");
    taskNum.textContent = ``;
    taskCon.textContent = ``;
    let btn = localStorage.getItem("btn");
    if (btnn ==="focus") {
      startBtn.textContent = "start break";
      startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
      let getLocalStorageData = localStorage.getItem("New Todo");
      listArray = JSON.parse(getLocalStorageData);
      var indx = localStorage.getItem("TaskNumber");
      if (indx <= listArray.length || indx <= 0) {
        listArray.splice(indx - 1, 1);
      }
//change on 15 jan, 2022
    var getfocusTime = parseInt(localStorage.getItem("focusTime"));
    var focusArr = JSON.parse(localStorage.getItem("focusArr"));
    var TaskArr = JSON.parse(localStorage.getItem("TaskArr"));
    var TaskSN = parseInt(localStorage.getItem("TaskSN"));
    focusArr.push(getfocusTime);
    TaskArr.push(TaskSN);
    TaskSN = TaskSN+1;
    localStorage.setItem("focusArr",  JSON.stringify(focusArr));
    localStorage.setItem("TaskArr",    JSON.stringify(TaskArr));
    localStorage.setItem("TaskSN",TaskSN);




     //change area 14 jan
     var dateObj = new Date();
     var month = dateObj.getUTCMonth() + 1; //months from 1-12
     var day = dateObj.getUTCDate();
     var year = dateObj.getUTCFullYear();
     let retriveX = JSON.parse(localStorage.getItem("xValues"));
    let retriveY = JSON.parse(localStorage.getItem("yValues"));
    let retriveZ = JSON.parse(localStorage.getItem("zValues"));
    var maxF = parseInt(localStorage.getItem("MaximumFocusTime"))
    var minF = parseInt(localStorage.getItem("MinimumFocusTime"))
    var TaskC = parseInt(localStorage.getItem("TaskCompleted"));
    maxF = Math.max(maxF, localStorage.getItem("focusTime")) ;
    localStorage.setItem("MaximumFocusTime",maxF);

    if(retriveZ.indexOf(day)==-1 ){
        TaskC = 1;
        localStorage.setItem("TaskCompleted",1);
        retriveX.push(TaskC);
        retriveY.push(day + "-" + month + "-" + year);
        retriveZ.push(day)
        localStorage.setItem("xValues",  JSON.stringify( retriveX));
        localStorage.setItem("yValues",    JSON.stringify(retriveY));
        localStorage.setItem("zValues",JSON.stringify( retriveZ));
    }
    else{
           var index = retriveZ.indexOf(day);
           retriveX[index]= TaskC+1;
           localStorage.setItem("TaskCompleted",TaskC+1);
          localStorage.setItem("xValues",    JSON.stringify(retriveX));


    }


 










//here end
      localStorage.setItem("New Todo", JSON.stringify(listArray));

      window.open("https://gargprince10001.github.io/EyeExercise.github.io/");

    
      // console.log("In focus area");
      // localStorage.setItem("btn", "break");
      // console.log(localStorage.getItem("btn"));


    }
    else {
      console.log("In Break time area")

      startBtn.classList.remove("break");
      startBtn.textContent = "start focus";
      localStorage.setItem("btn", "focus"); // today change 1
      // console.log("button is focus --" + localStorage.getItem("btn"));

    }
    startBtn.style.transform = "scale(1)"; //tha sy khi or likh rha  hu
  }
}
