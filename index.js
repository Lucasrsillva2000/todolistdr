// const tasks = []
// const removeTaskList = document.querySelector('#removeTaskList')

const input = document.querySelector('#text')
const addTaskButton = document.querySelector('#addTaskButton')
const taskList = document.querySelector('#taskList')
const taskUp = document.querySelector('#taskUp')
const taskDown = document.querySelector('#taskDown')

function addTask() {
  const inputValue = input.value
  const content = document.createElement('li')

  content.addEventListener('click', function () {
    content.style.backgroundColor = 'red'
  })
  content.addEventListener('dblclick', function () {
    content.style.backgroundColor = '#9ca3af'
  })

  content.innerHTML = inputValue

  content.classList.add('taskItem')
  taskList.appendChild(content)
}

taskUp.addEventListener('click', function () {
  const selectedItem = document.querySelector(
    '.taskItem[style*="background-color: red"]'
  )

  const previousItem = selectedItem.previousElementSibling

  if (previousItem) {
    // Se houver um item anterior, mova o item selecionado para antes dele.
    taskList.insertBefore(selectedItem, previousItem)
  }
})

taskDown.addEventListener('click', function () {
  const selectedItem = document.querySelector(
    '.taskItem[style*="background-color: red"]'
  )

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

//NÃO SER UM MERDA, PESQUISE E CONFIA NO CÓDIGO QUE FOI FEITO AQUI.
