const longitudInput = document.getElementById('longitud');
const mayusculasCheckbox = document.getElementById('mayusculas');
const minusculasCheckbox = document.getElementById('minusculas');
const numerosCheckbox = document.getElementById('numeros');
const simbolosCheckbox = document.getElementById('simbolos');
const generarBtn = document.getElementById('generar-contraseña');
const copiarBtn = document.getElementById('copiar-contraseña');
const contraseñaInput = document.getElementById('contraseña');

generarBtn.addEventListener('click', () => {
  const longitud = parseInt(longitudInput.value);
  const incluirMayusculas = mayusculasCheckbox.checked;
  const incluirMinusculas = minusculasCheckbox.checked;
  const incluirNumeros = numerosCheckbox.checked;
  const incluirSimbolos = simbolosCheckbox.checked;

  const caracteres = generarCaracteres(incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);
  const contraseña = generarContraseña(longitud, caracteres);
  contraseñaInput.value = contraseña;

  copiarBtn.disabled = false;
});

copiarBtn.addEventListener('click', () => {
  contraseñaInput.select();
  document.execCommand('copy');
  copiarBtn.textContent = '¡Copiado!';
  setTimeout(() => {
    copiarBtn.textContent = 'Copiar al Portapapeles';
  }, 2000);
});

function generarCaracteres(incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
  let caracteres = '';
  if (incluirMayusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (incluirMinusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
  if (incluirNumeros) caracteres += '0123456789';
  if (incluirSimbolos) caracteres += '!@#$%^&*()-_=+[{]}|;:,.<>?';

  return caracteres;
}

function generarContraseña(longitud, caracteres) {
  let contraseña = '';
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres.charAt(randomIndex);
  }
  return contraseña;
}