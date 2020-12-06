import css from './style.css'
import embed from 'vega-embed'

const block = function (el, config) {
  const child = document.createElement('div')
  child.classList.add(css.vegalite)

  el.appendChild(child)

  var def = config.config

  const createVega = () => {
    def.width = 'container'
    def.height = 'container'
    embed(child, def, {
      actions: false,
      renderer: 'svg'
    })
  }

  if (def) {
    createVega()
  } else {
    if (config._cache) {
      def = JSON.parse(config._cache)
      createVega()
    } else {
      // fallback to direct loading
      fetch(config.url)
        .then(resp => resp.text())
        .then(data => {
          config._cache = data
          def = JSON.parse(config._cache)
          createVega()
        })
    }
  }

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }
}

export default block

block.install = Presenta => {
  Presenta.addBlock('vegalite', block)
  if (Presenta.io.addCache) Presenta.io.addCache({ type: 'vegalite', field: 'url' })
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
