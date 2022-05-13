const firebaseConfig = {
    apiKey: "AIzaSyDjcoB8Nt6YcG91hc3r_aA6X9cGnwiAJgc",
    authDomain: "pagina-de-login-ffb9a.firebaseapp.com",
    projectId: "pagina-de-login-ffb9a",
    storageBucket: "pagina-de-login-ffb9a.appspot.com",
    messagingSenderId: "394548486577",
    appId: "1:394548486577:web:ef2042fd3015d690a15d90"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const nome = document.querySelector('#name').value


function enviar(){
   
  db.collection("cadastros").doc(
  document.querySelector('#name').value).set({

    CNPJ_CPF: document.querySelector('#cpf').value,
    Nome_Epresarial: document.querySelector('#name').value,
    Endereco: document.querySelector('#endereco').value,
    N: document.querySelector('#n').value,
    Bairro:document.querySelector('#district').value,
    Cidade: document.querySelector('#cidade').value,
    Estado: document.querySelector("#uf").value,
    CEP: document.querySelector('#zip').value,
    Telefone: document.querySelector('#phone').value,
    Email: document.querySelector('#email').value,
    Informações_adicionais: document.querySelector('#obs').value,
   
})
.then(() => {
    window.location.href = 'enviado.html'
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
})};