const ref = new Firebase("https://pokejeto-b19f7.firebaseio.com/");
const form = document.querySelector("form");

form.addEventListener("submit", postComment);

const timeStamp = () => {
  let options = {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute:'2-digit'
  };
  let now = new Date().toLocaleString('en-US', options);
  return now;
};

function postComment(e) {
  e.preventDefault();
  let pokemons = document.getElementById('pokeid').value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let comment = document.getElementById("comment").value;

  if (name && email && comment && pokemons) {
    ref.push({
      pokemons: pokemons,
      name: name,
      email: email,
      comment: comment,
      time: timeStamp()
    });
  }

  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("comment").value = '';
};  

