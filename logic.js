const easyMode = () => {
  let ranDom = Math.floor(Math.random() * 10) + 1;
  sessionStorage.setItem("random", ranDom);
  window.location.href = "easy.html";
};
var round = 1;

let inputValues = [];

const submitez = () => {
  let values = Number(document.getElementById("input-easy").value);
  let storedRandom = Number(sessionStorage.getItem("random"));
  document.getElementById("answerCorrect").innerText = storedRandom;
  document.getElementById("answerWinner").innerText = storedRandom;
  document.getElementById("answerLoser").innerText = storedRandom;
  document.getElementById("input-easy").value = "";

  if (values != " ") {
    inputValues.push(values); // เก็บค่าที่ส่งเข้ามาเป็น array เพื่อที่จำนำไปแสดง
    document.getElementById("hint").innerText = "";

    if (round < 3) {
      if (values === storedRandom) {
        document.getElementById("popup_youwin").style.display = "block";
      } else if (storedRandom >= 1 && storedRandom <= 3 && round > 0) {
        document.getElementById("hint").innerText = "Close 1 TO 3";
      } else if (storedRandom >= 3 && storedRandom <= 6 && round > 0) {
        document.getElementById("hint").innerText = "Close 3 To 6";
      } else if (storedRandom >= 6 && storedRandom <= 10 && round > 0) {
        document.getElementById("hint").innerText = "Close 6 To 10";
      }
      round++;
    } else if (round == 3) {
      if (values === storedRandom) {
        document.getElementById("popup_youwin").style.display = "block";
      } else {
        document.getElementById("popup_youlost").style.display = "block";
      }
    }
  } else {
    document.getElementById("hint").innerText = "Please enter a number!";
  }

  // ส่วนของการ นำตัวเลขไปแสดง
  if (inputValues.length > 4) {
    inputValues.shift(); // ลบตัวแรก
  }

  // แสดงค่าที่กรอกในตัวแปรต่าง ๆ
  document.getElementById("number1").innerText = inputValues[0] || "";
  document.getElementById("number2").innerText = inputValues[1] || "";
  document.getElementById("number3").innerText = inputValues[2] || "";
  document.getElementById("number4").innerText = inputValues[3] || "";

  // หากมีการกรอกค่าเกิน 4 ครั้งให้เริ่มเพิ่ม id number 2, 3, 4
  if (inputValues.length > 4) {
    for (let i = 4; i < inputValues.length; i++) {
      document.getElementById(`number${i - 3}`).innerText =
        inputValues[i] || "";
    }
  }
  // ล้างค่าใน input
  document.getElementById("input-easy").value = "";
  displayAnswer(); // เรียกใช้ฟังก์ชัน displayAnswer เพื่ออัพเดทค่าใน DOM
};



//----------------------------Normal-----------------------


const normalMode = () => {
  let ranDom = Math.floor(Math.random() * 50) + 1;
  sessionStorage.setItem("random", ranDom);
  window.location.href = "normal.html";
};

const checknormal = () => {
  let valueInput = Number(document.getElementById("input-normal").value);
  let randomStored = Number(sessionStorage.getItem("random"));
  document.getElementById("input-normal").value = ""; //
  debugger;
  console.log(randomStored);
  if (valueInput != " ") {
    inputValues.push(valueInput);

    document.getElementById("hint").innerText = " ";
    if (round < 5) {
      if (valueInput == randomStored) {
        document.getElementById("popup_youwin").style.display = "block";
      } else if (randomStored >= 1 && randomStored <= 10 && round > 0) {
        document.getElementById("hint").innerText = "Close 1 TO 10";
      } else if (randomStored >= 11 && randomStored <= 20 && round > 0) {
        document.getElementById("hint").innerText = "Close 11 TO 20";
      } else if (randomStored >= 21 && randomStored <= 30 && round > 0) {
        document.getElementById("hint").innerText = "Close 21 TO 30";
      } else if (randomStored >= 31 && randomStored <= 40 && round > 0) {
        document.getElementById("hint").innerText = "Close 31 TO 40";
      } else if (randomStored >= 41 && randomStored <= 50 && round > 0) {
        document.getElementById("hint").innerText = "AClose 41 TO 50";
      }
      round++;
    } else if (round == 5) {
      if (valueInput === randomStored) {
        document.getElementById("popup_youwin").style.display = "block";
      } else {
        document.getElementById("popup_youlost").style.display = "block";
      }
    }
  } else {
    document.getElementById("hint").innerText = "Please enter a number!";
  }

  // ส่วนของการ นำตัวเลขไปแสดง
  if (inputValues.length > 5) {
    inputValues.shift(); // ลบตัวแรก
  }

  // แสดงค่าที่กรอกในตัวแปรต่าง ๆ
  document.getElementById("number1").innerText = inputValues[0] || "";
  document.getElementById("number2").innerText = inputValues[1] || "";
  document.getElementById("number3").innerText = inputValues[2] || "";
  document.getElementById("number4").innerText = inputValues[3] || "";
  document.getElementById("number5").innerText = inputValues[4] || "";
  // หากมีการกรอกค่าเกิน 4 ครั้งให้เริ่มเพิ่ม id number 2, 3, 4
  if (inputValues.length > 5) {
    for (let i = 5; i < inputValues.length; i++) {
      document.getElementById(`number${i - 4}`).innerText =
        inputValues[i] || "";
    }
  }
  // document.getElementById("input-easy").value = "";
  answerDisplay(); // เรียกใช้ฟังก์ชัน displayAnswer เพื่ออัพเดทค่าใน DOM
};

//----------------------------Hard-----------------------

const hardMode = () => {
  let ranDom = Math.floor(Math.random() * 100) + 1;
  sessionStorage.setItem("random", ranDom);
  window.location.href = "hard.html";
};

const hardsubmit = () => {
  let valueInput = Number(document.getElementById("input-hard").value);
  let randomStored = Number(sessionStorage.getItem("random"));
  document.getElementById("input-hard").value = ""; //
  debugger;
  console.log(randomStored);
  if (valueInput != " ") {
    inputValues.push(valueInput);

    document.getElementById("hint").innerText = " ";
    if (round < 10) {
      if (valueInput == randomStored) {
        document.getElementById("popup_youwin").style.display = "block";
      } else if (randomStored >= 10 && randomStored <= 20 && round > 0) {
        document.getElementById("hint").innerText = "Close 10 TO 20";
      } else if (randomStored >= 20 && randomStored <= 30 && round > 0) {
        document.getElementById("hint").innerText = "Close 20 TO 30";
      } else if (randomStored >= 30 && randomStored <= 40 && round > 0) {
        document.getElementById("hint").innerText = "Close 30 TO 40";
      } else if (randomStored >= 40 && randomStored <= 50 && round > 0) {
        document.getElementById("hint").innerText = "Close 40 TO 50";
      } else if (randomStored >= 50 && randomStored <= 60 && round > 0) {
        document.getElementById("hint").innerText = "AClose 50 TO 60";
      } else if (randomStored >= 60 && randomStored <= 70 && round > 0) {
        document.getElementById("hint").innerText = "AClose 60 TO 70";
      } else if (randomStored >= 70 && randomStored <= 80 && round > 0) {
        document.getElementById("hint").innerText = "AClose 70 TO 80";
      } else if (randomStored >= 80 && randomStored <= 90 && round > 0) {
        document.getElementById("hint").innerText = "AClose 80 TO 90";
      } else if (randomStored >= 90 && randomStored <= 100 && round > 0) {
        document.getElementById("hint").innerText = "AClose 90 TO 100";
      } else if (randomStored >= 100 && randomStored <= 100 && round > 0) {
        document.getElementById("hint").innerText = "Close 100 ";
      }
      round++;
    } else if (round == 10) {
      if (valueInput === randomStored) {
        document.getElementById("popup_youwin").style.display = "block";
      } else {
        document.getElementById("popup_youlost").style.display = "block";
      }
    }
  } else {
    document.getElementById("hint").innerText = "Please enter a number!";
  }

  // ส่วนของการ นำตัวเลขไปแสดง
  if (inputValues.length > 10) {
    inputValues.shift(); // ลบตัวแรก
  }

  document.getElementById("number1").innerText = inputValues[0] || "";
  document.getElementById("number2").innerText = inputValues[1] || "";
  document.getElementById("number3").innerText = inputValues[2] || "";
  document.getElementById("number4").innerText = inputValues[3] || "";
  document.getElementById("number5").innerText = inputValues[4] || "";
  document.getElementById("number6").innerText = inputValues[5] || "";
  document.getElementById("number7").innerText = inputValues[6] || "";
  document.getElementById("number8").innerText = inputValues[7] || "";
  document.getElementById("number9").innerText = inputValues[8] || "";
  document.getElementById("number10").innerText = inputValues[9] || "";

  // หากมีการกรอกค่าเกิน 4 ครั้งให้เริ่มเพิ่ม id number 2, 3, 4
  if (inputValues.length > 10) {
    for (let i = 10; i < inputValues.length; i++) {
      document.getElementById(`number${i - 9}`).innerText =
        inputValues[i] || "";
    }
  }
  // document.getElementById("input-easy").value = "";
  answerDisplay(); // เรียกใช้ฟังก์ชัน displayAnswer เพื่ออัพเดทค่าใน DOM
};

function displayAnswer() { // 
  let storedRandom = Number(sessionStorage.getItem("random"));
  document.getElementById("answerCorrect").innerText = storedRandom;
  document.getElementById("answerWinner").innerText = storedRandom;
  document.getElementById("answerLoser").innerText = storedRandom;
  document.getElementById("rounds").innerText = round;
}
function answerDisplay() {
  let randomStored = Number(sessionStorage.getItem("random"));
  document.getElementById("rounds").innerText = round;
}

function limitInputLength(elem, maxLength) {
  if (elem.value.length > maxLength) {
    elem.value = elem.value.slice(0, maxLength);
  }
}

// เรียกใช้ popup
function open_popup() {
  document.getElementById("popup").style.display = "block";
}
// ปิด popup
function close_popup() {
  document.getElementById("popup").style.display = "none";
}
