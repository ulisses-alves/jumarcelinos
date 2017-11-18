import style from './style.styl'
import { Slide } from '../slide'

export function About() {
  return (
    <Slide
      theme="theme4"
      left={
        <span>Hi, I'm Juliana</span>
      }
      leftContent={
        <img
          src="static/img/avatar.png"
          alt="Juliana Marcelino"
          className={style.avatar} />
      }
      right={
        <span>Journalist &amp; Designer</span>
      }
      rightContent={
        <p className={style.description}>
          The best stories involve empathy, people and inspiring causes. I’m a brazilian
          journalist and designer living in Denmark. My work focuses on all the elements
          required for good communications. I have worked producing content and design for
          Technology, Energy, Education and Communication industries, transforming concepts
          and ideas. These include a careful research about the client's target and how to
          use text, data, infographics, images and layouts to create successful stories.
          Living in Odense, Denmark with my family, I'm always eager to explore different
          points of views, places and ideas - creating new narratives and long lasting
          connections.
        </p>
      }
    />
  )
}
