import Image from 'next/image'
import styles from './page.module.css'

export default function IndexPage() {
  return (
    <div>
      Redo! ... rebuilding the app now.<br />
      <ul>
        <li>Upgraded...</li>
        <li>React v17 to v18</li>
        <li>Next.js v10 to v14</li>
        <li>|__ With the new fancy App Router!</li>
        <li>Material UI v4 to v5</li>
        <li>Ripped out redux, thunk, express, mongo, typeorm...</li>
        <li>Picked some new colors, lets do neon</li>
        <li>Added Mui theme stuff to play with</li>
        <li>Using plain CSS because styled components are a pain</li>
        <li>Readded Navbar back in</li>
      </ul>
    </div>
  )
}
