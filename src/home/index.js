import { Slide } from '../slide'

export function Home() {
  return (
    <Slide
      theme="theme1"
      left={
        <span>Creating<br />Successful</span>
      }
      right={
        <span>Design + Content</span>
      }
    />
  )
}