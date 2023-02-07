const fortunePhrases = [
  {
    index: 0,
    content:
      'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.'
  },
  {
    index: 1,
    content:
      'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.'
  },
  {
    index: 2,
    content:
      'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.'
  },
  {
    index: 3,
    content:
      'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.'
  },
  {
    index: 4,
    content: 'Tente a sua sorte! A vida é feita de oportunidades.'
  },
  { index: 5, content: 'A perseverança é a mãe da boa sorte.' },
  {
    index: 6,
    content:
      'O homem é assim o árbitro constante de sua própria sorte. Ele pode aliviar o seu suplício ou prolongá-lo {index: 1, content:indefinidamente. Sua felicidade ou sua desgraça dependem da sua vontade de fazer o bem.'
  },
  {
    index: 7,
    content:
      'Destino não é uma questão de sorte, mas uma questão de {index: 1, content:escolha; não é uma coisa que se espera, mas que se busca.'
  },
  { index: 8, content: 'Sorte é estar pronto quando a oportunidade vem.' },
  {
    index: 9,
    content:
      'Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer.'
  }
]

const homeScreen = document.querySelector('div.home')
const revealScreen = document.querySelector('div.reveal')
const fortuneCookie = document.querySelector('.home img')
const openAnotherCookieButton = document.querySelector('#openAnotherCookie')
const phrase = document.querySelector('.phrase p')

function handleShakeCookie() {
  if (fortuneCookie.style.animationPlayState === 'running') {
    fortuneCookie.style.animationPlayState = 'paused'
  } else {
    fortuneCookie.style.animationPlayState = 'running'
  }
}

function toggleScreen() {
  homeScreen.classList.toggle('hide')
  revealScreen.classList.toggle('hide')
  fortuneCookie.style.animationPlayState = 'paused'
}

function openAnotherCookie() {
  toggleScreen()
}

function switchPhrase() {
  let index = Math.floor(Math.random() * fortunePhrases.length)
  phrase.innerText = fortunePhrases[index].content
}

fortuneCookie.addEventListener('click', () => {
  handleShakeCookie()
  switchPhrase()
  setTimeout(toggleScreen, 500)
})

openAnotherCookieButton.addEventListener('click', toggleScreen)
