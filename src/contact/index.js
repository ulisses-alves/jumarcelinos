import style from './style.styl'
import { Slide } from '../slide'

export function Contact() {
  return (
    <Slide
      theme="theme5"
      left={
        <span>Contact</span>
      }
      rightContent={
        <div className={style.description}>
          <p>
            You can have more information, send questions or just share your expecience.
            <br />Let's talk!
          </p>
          <a
            href="mailto:contato@jumarcelinos.com"
            className={style.button}>
            Click Here
          </a>
        </div>
      }
    />
  )
}