// const tasks = []
// const removeTaskList = document.querySelector('#removeTaskList')

const input = document.querySelector('#text')
const addTaskButton = document.querySelector('#addTaskButton')
const taskList = document.querySelector('#taskList')

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
