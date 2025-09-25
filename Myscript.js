function myFunction() {
  document.getElementById("demo").innerHTML = "billedebeskrivelse: Nnenna og Julie";
  if(document.getElementById("demo").style.display == "none"){
  document.getElementById("demo").style.display="block";
  }
  else(
   document.getElementById("demo").style.display = "none" 
  )

}

function backgroundColor(){
  if(document.body.style.backgroundColor == "lightpink"){
   document.body.style.backgroundColor = "white";  
  }
  else(
   document.body.style.backgroundColor= "lightpink" 
  )
}

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

const buttonB = document.querySelector("#button_B");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  count += 1;
  headingA.textContent = `${count} antal klik`;
};

buttonB.onclick = () => {
  buttonB.textContent = "Try again!";
  count -= 1;
  headingA.textContent = `${count} antal klik`;
};

const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue() {
    
  log.textContent = input.value.length;
}


