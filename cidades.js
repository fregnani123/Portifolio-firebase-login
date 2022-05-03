
const uf = document.querySelector('#uf');

function pegarCidades(){

fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`).then((response) => {response.json().then(jsonCidades => { 
    
   const cidades = document.querySelector('#cidade')
  

jsonCidades.map((item) =>{ 
   const option = document.createElement('option');

option.setAttribute('id', item.id)
option.innerHTML = item.nome;
cidades.appendChild(option)

console.log(item)


})


 })

}) 

}


/*
   for(i=0 ; i < jsonCidades.length; i++){
    
      console.log(jsonCidades[i]);
      document.querySelector('#teste').innerHTML += jsonCidades [i]}*/