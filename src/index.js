'use strict'

require('./index.html')

const Elm = require('./Jumarcelinos/Main.elm')
const mountNode = document.getElementById('main')
const app = Elm.Main.embed(mountNode)
