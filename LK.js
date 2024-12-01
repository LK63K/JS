// alert('coucou jon')

function changeText() {
  const paragraphe = document.getElementById("pdiddy"); // sert a recuperer mon <p> dans mon html
  console.log(paragraphe);

  const input = document.getElementById("luka"); // sert a recuperer  <input> dans mon html
  console.log(input);

  const valueInput = input.value; // sert a recuperer la valeur a l interieur de mon input
  console.log(valueInput);

  paragraphe.innerText = valueInput; // sert a remplacer la valeur de mon <p> par la valeur de mon input
}

function changecolor(event) {
  console.log(event);
  const color = event.target.value;
  console.log(color);
  const body = document.querySelector("body");
  console.log(body);
  body.style.background = color;
}

function showtext() {
  const P = document.getElementById("resultAge");
  const age = document.getElementById("age").value;

  if (age <= 0) {
    P.innerText = "tes pas né";
  } else if (age > 0 && age <= 13) {
    P.innerText = "tes un sale gosse";
  } else if (age > 14 && age <= 17) {
    P.innerText = "bravo tes un ado";
  } else if (age > 17){
    P.innerText = "vous etes majeur"
  } else{ P.innerText = "NON"

  }
  }
function showtext2(){

const paragraphe = document.getElementById("resultAnimeaux")
const select = document.getElementById("animale").value 
switch(select){
    case'chien':
    case'chats':
    case'lapin':
    paragraphe.innerText='animeaux domestiques'
    break
    case'pinguin':
    paragraphe.innerText='animal froid'
    break
    case'loup':
    paragraphe.innerText='animal sauvage grrrr'
   break
    default:
        paragraphe.innerText='loulou'
    
   }

}

//iejdizjedez











