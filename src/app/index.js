import { Router, Route, IndexRoute } from 'inferno-router'
import createHistory from 'history/createHashHistory'
import style from './style.styl'
import { Home } from '../home'
import { Work } from '../work'
import { Services } from '../services'
import { About } from '../about'
import { Contact } from '../contact'

const history = createHistory()

function Main(props) {
  return (
    <main className={style.container}>
      {props.children}
    </main>
  )
}

export function App() {
  return (
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="work" component={Work} />
        <Route path="services" component={Services} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  )
}