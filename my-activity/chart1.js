var MaximumFocusTime= document.querySelector("#maxF");
var MaxT = document.querySelector("#maxT");
var Total_T = document.querySelector('#Total-Tasks');
var maxF = localStorage.getItem("MaximumFocusTime");
var Task = localStorage.getItem("TaskCompleted")
var Total_Tasks =   JSON.parse(localStorage.getItem("TaskArr")).length;

MaximumFocusTime.textContent = `Maximum Focus time is : ${maxF} minutes`;
MaxT.textContent = `Task completed Today is ${Task}`
Total_T.innerHTML = `Total Task Completed till now is <b>${Total_Tasks}</b>`;