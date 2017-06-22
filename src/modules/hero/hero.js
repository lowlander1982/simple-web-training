import template from './hero.handlebars'
import './hero.scss'

module.exports = {
  display: function(params) {
    return template(params)
  }
}
