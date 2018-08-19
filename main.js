var P = new Pokedex.Pokedex();
var pokemon = document.getElementById('pokeid').value;
var i;


//console.log(pokemon);
function gerar(){

	var pokemon = document.getElementById('pokeid').value;	
	  P.getPokemonByName(pokemon).then(function(response) {              // Pokemons
      //console.log(response);
      var poke = response;
 $('#nameid').val(poke.name);
 $('#pesoid').val(poke.weight);
 var quantAbilities = poke.abilities.length;
 //console.log(quantAbilities); 	
 for(i=0; i<quantAbilities; i++){

 document.getElementById('poderid').innerHTML = "";
}
 for(i=0; i<quantAbilities; i++){

 	 var existingSelection = document.getElementById('poderid').innerHTML;
 	 var abili = poke.abilities[i].ability.name;
 	 //console.log(abili);
     document.getElementById('poderid').value = existingSelection + abili+ ";  ";
 //$('#poderid').html(poke.abilities[i].ability.name); 
}
 document.getElementById('tipoId').innerHTML = "";
 var quantTipos = poke.types.length;
for(i=0; i<quantTipos; i++){

 	 var existingSelection = document.getElementById('tipoId').innerHTML;
 	 var tipos = poke.types[i].type.name;
 	 //console.log(tipos);
     document.getElementById('tipoId').value = existingSelection + tipos+ ";  ";
}
 //$('#fotoid').src(response.sprites.front_default);
 document.getElementById("fotoid").style.display = "";
 $("#fotoid").attr("src",poke.sprites.front_default);
}


);

var id = document.getElementById('idid').value
P.getCharacteristicById(id)                              // Características
    .then(function(response) {
      //console.log(response);
      $('#descrid').val(response.descriptions[1].description);

    });

ref.on("child_added", function(snapshot) {
  let comment = snapshot.val();
  addComment(comment.name, comment.email, comment.pokemons, comment.comment, comment.time);

});

const addComment = (name, email, pokemons, comment, timeStamp) => {

  console.log(pokemons+"s");
  console.log(pokemon);

  if(pokemons==pokemon){
  let comments = document.getElementById("comments"); 
  comments.innerHTML = `<hr><h4>${name} ${pokemons}  ${email} says<span>${timeStamp}</span></h4><p>${comment}</p>${comments.innerHTML}`;

}else{
}
}

}

