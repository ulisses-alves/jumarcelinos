import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import alias from 'rollup-plugin-alias'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace';
import postcssModules from 'postcss-modules'
import stylus from 'stylus'
import serve from 'rollup-plugin-serve'

const cssExportMap = {}

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/main.js',
    format: 'iife'
  },
  plugins: [
    alias({
      inferno: 'node_modules/inferno/dist/index.es.js',
      'inferno-component': 'node_modules/inferno-component/dist/index.es.js',
      'inferno-create-element': 'node_modules/inferno-create-element/dist/index.es.js',
      'inferno-router': 'node_modules/inferno-router/dist/index.es.js',
    }),
    postcss({
      preprocessor: (content, id) => new Promise((resolve, reject) => {
        const renderer = stylus(content, {
          filename: id,
          sourcemap: { inline: true }
        })

        renderer.render((err, code) => {
          if (err) {
            return reject(err)
          }

          resolve({ code, map: renderer.sourcemap })
        })
      }),
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens
          }
        })
      ],
      getExportNamed: false,
      getExport (id) {
        return cssExportMap[id]
      },
      extensions: ['.styl']
    }),
    babel({
      exclude: [
        'node_modules/**',
        '**/*.styl'
      ]
    }),
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    serve()
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
}