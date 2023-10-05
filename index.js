// const removeTaskList = document.querySelector('#removeTaskList')

const input = document.querySelector('#text')
const addTaskButton = document.querySelector('#addTaskButton')
const taskList = document.querySelector('#taskList')
const moveTaskUp = document.querySelector('#taskUp')
const moveTaskDown = document.querySelector('#taskDown')

//ADICIONAR TASKS
function addTask() {
  const inputValue = input.value
  const content = document.createElement('li')

  if (inputValue == '') {
    return
  }

  //checa se ta selecionado o LI, se estiver ele remove a seleção, e depois adiciona.
  content.addEventListener('click', function () {
    const previousLiSelected = document.querySelector('.selectedItem')
    if (previousLiSelected) {
      previousLiSelected.classList.remove('selectedItem')
    }
    content.classList.add('selectedItem')
  })

  //adiciona um sublinhado ao conteudo do li e remove ao dar double click.
  content.addEventListener('dblclick', function () {
    if (content.classList.contains('markedText')) {
      content.classList.remove('markedText')
    } else {
      const markedText = document.querySelector('.selectedItem')
      if (markedText) {
        markedText.classList.remove('markedText')
      }
      markedText.classList.add('markedText')
    }
  })

  content.innerHTML = inputValue
  input.value = ''

  content.classList.add('taskItem')
  taskList.appendChild(content)
}

//para mover as tasks para cima
moveTaskUp.addEventListener('click', function () {
  const selectedItem = document.querySelector('.selectedItem')

  const previousItem = selectedItem.previousElementSibling

  if (previousItem) {
    // Se houver um item anterior, mova o item selecionado para antes dele.
    taskList.insertBefore(selectedItem, previousItem)
  }
})

//para mover as tasks para baixo
moveTaskDown.addEventListener('click', function () {
  const selectedItem = document.querySelector('.selectedItem')

  const nextItem = selectedItem.nextElementSibling

  if (nextItem) {
    // Se houver um próximo item, mova o item selecionado para depois dele.
    taskList.insertBefore(selectedItem, nextItem.nextElementSibling)
  }
})

window.onload = () => {
  addTaskButton.onclick = addTask
  //removeTaskList.onclick = removeTask
}

// function removeTask() {
//   taskList.remove('taskItem')
// }

//remova uma task ao clicar duas vezes nela

// selecionar a task e fazer ela ir pra cima OU pra baixo, ao clicar nas setas

//COISAS PARA DAR UMA OLHADINHA QUE EU VOU USAR:
// parentNode.insertBefore
// previousElementSibling
// nextElementSibling

//FAZER IGUAL AO SITE DO MAROMBA

// ===                     // SELECIONAR UMA TASK POR VEZ, NÃO ESQUECER!!!
// ===                     // FAZER O DOUBLE CLICK DA TASK, PARA APARECER A BOLA PRETA, E O TEXTO RISCADO.
// CLICAR NO SAVE GAME PARA SALVAR AS TASKS COLOCADAS E TODOS OS ESTADOS
// CLICAR NO REMOVER FINALIZADOS PARA REMOVER AS TASKS FINALIZADAS!!!!!!!!!!
// CLICAR NA LIXEIRA PARA REMOVER TUDO!!!!!!!!
//===                     // AO ADICIONAR A TASK, FAZER COM QUE O CONTEUDO DO INPUT VOLTE A FICAR VAZIO!!!
// ADICIONAR O TOGGLE NAS SETAS (CLASSLIST.TOGGLE)

//NÃO SER UM MERDA, PESQUISE E CONFIA NO CÓDIGO QUE FOI FEITO AQUI.
