//DECLARAR VARIABLES GLOBALES DE FORMA QUE EL USUARIO REGISTRADO PUEDA LOGUEARSE
let datosUser = [];
let usuarioLogueado ={};

function init(){
    datosUser = JSON.parse(window.localStorage.getItem("users"))||[];
    usuarioLogueado = JSON.parse(window.localStorage.getItem("login"));
    console.log(datosUser)
}

registroCompleto = () => {
  const userNombre = document.getElementById("registro-nombre");
  const userApellidos = document.getElementById("registro-apellidos");
  const userEmail = document.getElementById("registro-email");
  const userDireccion = document.getElementById("registro-direccion");
  const userContraseña = document.getElementById("registro-contraseña");
  const resultadoNombre = document.getElementById("resultado-nombre");
  const resultadoApellidos = document.getElementById("resultado-apellidos");
  const resultadoEmail = document.getElementById("resultado-email");
  const resultadoDireccion = document.getElementById("resultado-direccion");
  const resultadoContraseña = document.getElementById("resultado-contraseña");
  let contraseñaReal = "";
  let emailReal = "";

  if (
    !isNaN(userNombre.value) ||
    userNombre.value.includes("@") ||
    userNombre.value.includes("!") ||
    userNombre.value == "" ||
    userNombre.value.length < 3
  ) {
    resultadoNombre.innerHTML = "<p>El nombre es incorrecto</p>";
  } else {
    console.log("nombre correcto");
    resultadoNombre.innerHTML = "";
  }

  if (
    userApellidos.value.includes("@") ||
    userApellidos.value.includes("!") ||
    userApellidos.value == "" ||
    userApellidos.value.length < 3
  ) {
    resultadoApellidos.innerHTML = "<p>El apellido es incorrecto</p>";
  } else {
    console.log("el apellido es correcto");
    resultadoApellidos.innerHTML = "";
  }
  if (
    userEmail.value[userEmail.value.length - 1] == "." ||
    userEmail.value[0] === "-" ||
    !userEmail.value.includes("@") ||
    userEmail.value.length < 6 ||
    !userEmail.value.includes(".")
  ) {
    resultadoEmail.innerHTML = "<p>El email es incorrecto</p>";
  } else {
    emailReal = userEmail.value;
    resultadoEmail.innerHTML = "";
  }

  if (userDireccion.value.length < 5 || userDireccion.value === "") {
    resultadoDireccion.innerHTML = "<p>La dirección es incorrecta</p>";
  } else {
    console.log("Email correctos");
    resultadoDireccion.innerHTML = "";
  }
  if (userContraseña.value.length < 5 || userContraseña.value === "") {
    resultadoContraseña.innerHTML = "<p>La contraseña es incorrecta</p>";
  } else {
    contraseñaReal = userContraseña.value;
    resultadoContraseña.innerHTML = "";
  }

  datosUser.push({ email: emailReal, contraseña: contraseñaReal });

  window.localStorage.setItem("users", JSON.stringify(datosUser));

};



function login() {
  console.log(datosUser);


  const emailUsuario = document.getElementById("email-usuario");
  const passwordUsuario = document.getElementById("password-usuario");
  const correcto = document.getElementById("correcto");
  const incorrecto = document.getElementById("incorrecto");
  let existeUsuario = false;


  for (let i = 0; i < datosUser.length; i++) {
    if (
      emailUsuario.value === datosUser[i].email &&
      passwordUsuario.value === datosUser[i].contraseña
    ) {
        existeUsuario= true;
        break;

    }     
  }

  if (existeUsuario) {
    correcto.style.visibility = "";
    correcto.style.color = "green";
    incorrecto.style.visibility = "hidden";
    usuarioLogueado= {nombre: emailUsuario.value, contraseña: passwordUsuario.value};
    window.localStorage.setItem("login", JSON.stringify(usuarioLogueado));
    logout.style.visibility="";
    


  } else {
    incorrecto.style.visibility = "";
    incorrecto.style.color = "red";
    correcto.style.visibility = "hidden";
  }

  console.log(datosUser);
  console.log(existeUsuario);
}

const logout= document.getElementById("logout")

// if(usuarioLogueado){
//   logout.style.visibility="";
// }
// console.log(usuarioLogueado);

function logOut(){
    
  localStorage.removeItem("login");
  logout.style.visibility="hidden";
  

    
}

// console.log(usuarioLogueado);

// function existeUser() {
    
//     //
//   for (let i = 0; i < datosUser.length; i++) {
//     if (
//       emailUsuario.value === datosUser[i].email &&
//       passwordUsuario.value === datosUser[i].contraseña
//     ) {
//         existeUsuario= true;

//     } 
    
//   }
// }