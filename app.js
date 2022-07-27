window.onload= () => {
   let button = document.querySelector('#boton');

  button.addEventListener('click', () => {

    let pretext = document.querySelector('#excuse');
    pretext.innerHTML = generateExcuse();
  })
  console.log("holi")
};

let generateExcuse = () =>{

let who = ['The dog','My granma','His turtle','My bird'];
let action = ['eat my','took my','crushed with my','broke my'];
let what = ['book', 'shoes', 'homework', 'body']
let where = ['in my house','on the street','during my class','while I was praying']; 

let whoIndex = Math.floor(Math.random() * who.length);
let actionIndex = Math.floor(Math.random() * action.length);
let whatIndex= Math.floor(Math.random() * what.length);
let whereIndex= Math.floor(Math.random() * where.length);


return who[whoIndex]+ ' ' + action[actionIndex]+ ' ' + what[whatIndex] + ' ' + where[whereIndex];


}

