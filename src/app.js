import './sass-base/main.scss'
import Hero from './modules/hero/hero'

document.querySelector('#container').insertAdjacentHTML('beforeend', Hero.display({
  header: 'Hola Sebastian'
}))
