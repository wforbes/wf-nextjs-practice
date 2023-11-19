import PageHeading from '@/app/components/Layout/PageHeading';

export default function UpdatesPage() {
    
    return (
      <>
        <PageHeading />
        <div>
          (11/15/23) Redo! ... rebuilding the app now.<br />
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
      </>
    )
  }