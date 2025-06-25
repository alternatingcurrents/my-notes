// quartz/components/AboutButton.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AboutButton: QuartzComponentConstructor = () => {
  /* the actual JSX element that will be rendered */
  function About({}: QuartzComponentProps) {
    return (
      <a class="about-link" href="/about">
        About
      </a>
    )
  }

  // (optional) About.css = `…`

  return About                 //  ← return the *function*, not an object
}

export default AboutButton
