import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div style={{textAlign : 'center' , padding : '30vh 30vw'}}>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        Go back home
      </Link>
    </div>
  )
}