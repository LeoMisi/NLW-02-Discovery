// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField(){
  //Duplicar os Campos
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

  //Limpar os Campos. Que Campos?
  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach(function(field){
    // Pega o field do momento e limpa ele
    field.value = ""
  })

  // Colocar na página..! Onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}