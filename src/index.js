'use strict'

require('./index.html')
require('ace-css/css/ace.css')
require('./style/index.styl')

const Elm = require('./elm/Main.elm')
const mountNode = document.getElementById('main')
const app = Elm.Main.embed(mountNode)
