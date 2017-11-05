import style from './style.styl'
import { Navigation } from '../navigation'

export function Slide(props) {
  return (
    <section className={`${style.container} ${style[props.theme]}`}>
      <div className={style.left}>
        <h1 className={style.title}>Juliana Marcelino</h1>
        <address className={style.contact}>
          <a href="mailto:contato@jumarcelinos.com">contato@jumarcelinos.com</a>
        </address>
        <h2 className={style['left-title']}>{props.left}</h2>
        <div className={style['left-content']}>{props.leftContent}</div>
      </div>
      <div className={style.right}>
        <Navigation className={style.navigation} />
        <address className={style.social}>
          <a href="https://www.facebook.com/jumarcelinos" target="_blank">
            <i class="fa fa-facebook-square"></i>
            </a>  
          <a href="https://www.linkedin.com/in/marcelinojuliana" target="_blank">
            <i class="fa fa-linkedin-square"></i>
          </a>  
          <a href="https://www.behance.net/jumarcelinos" target="_blank">
            <i class="fa fa-behance-square"></i>
          </a>  
        </address>
        <h2 className={style['right-title']}>{props.right}</h2>
        <div className={style['right-content']}>{props.rightContent}</div>
      </div>
    </section>
  )
}