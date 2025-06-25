import { h } from "preact"

export function Link({ href, text }: { href: string; text: string }) {
  return <a href={href} className="link">{text}</a>
}
