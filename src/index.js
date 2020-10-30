import css from './style.css'
import embed from 'vega-embed'

const block = function (el, config) {
  const child = document.createElement('div')
  child.classList.add(css.vegalite)

  el.appendChild(child)

  var def = config.vega

  if (!def && config.url) {
    fetch(config.url)
      .then(resp => resp.json())
      .then(data => {
        def = data
        createVega()
      })
  }

  const createVega = () => {
    def.width = 'container'
    def.height = 'container'
    embed(child, def, {
      actions: false,
      renderer: 'svg'
    })
  }

  if (def) createVega()

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }
}

export default block

block.install = Presenta => {
  Presenta.addBlock('vegalite', block)
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
