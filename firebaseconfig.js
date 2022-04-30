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
  var auth = firebase.auth()

  let email = document.querySelector('#email')
  let password = document.querySelector('#senha')

function login(){

auth.signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    var user = userCredential
    window.location.href = 'login.html';
   console.log(user)
  }).catch((error) => { 
  
    var errorCode = error.code;
    var errorMessage = error.message;
 
    //if (email.value == '' && password.value == '') {
      //alert(errorMessage = 'Usuário ou senha invalidos!')}
    alert (errorMessage)
        
  });
}
  document.querySelector('#registrar').addEventListener('click', function(){
    document.querySelector('#conteiner').style.display='none'
    document.querySelector('#conteiner2').style.display='flex'
  })

  document.querySelector('#registrado').addEventListener('click',function(){
  document.querySelector('#conteiner2').style.display='none'
  document.querySelector('#conteiner').style.display='flex'
  });
  
function cadastro (){
  
let emailCadastrar = document.querySelector('#emailCadastrar')
let password2 =document.querySelector('#senha2')

  auth.createUserWithEmailAndPassword(emailCadastrar.value, password2.value)
  .then((userCredential) => {
 
    var user = userCredential.user;
    window.location.href = 'login.html';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  alert(errorMessage)
})
}


