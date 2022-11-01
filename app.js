
const inputText = document.querySelector('#word')
const p = document.createElement('p');
const response = document.querySelector('#response')
const cipherButton = document.querySelector('.cipher')
const uncipherButton = document.querySelector('.uncipher')

const code = document.querySelector('#codeValue');

const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ]


function cipher13(str, codefy){
  //criar acumulador
  //rolar o loop pela strin inteira
  //se não fizer parte do alfabeto, não fazer nada. adiciona ao acc
  //else, rodar o caractére em 13 espaços
  // retorna o acumulador

  let accumulator = "";

  for (let i = 0; i < str.length; i++){
    const char = str[i]
    const isALetter = alphabet.includes(char)
    
    if (isALetter === false){
      accumulator += char;
    } else {
      
      const charIndex = alphabet.findIndex((c) => c === char)
      
      accumulator += alphabet[charIndex + codefy ] || alphabet[charIndex - codefy];
    }
  }
  
  p.textContent = `Palavra criptorafada ou descriptorafada: ` + accumulator
  response.insertAdjacentElement('beforeend', p)
  
  return accumulator;
  

}

cipherButton.addEventListener('click', () => {
  cipher13(inputText.value, Number(code.value))
} );


