import Link from 'next/link'
import { GetServerSidePropsContext } from 'next'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/a" as="/a">
          a
        </Link>
      </li>
      <li>
        <Link href="/b" as="/b">
          b
        </Link>
      </li>
    </ul>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  console.log((context.req as any).test)

  return { props: {} }
}
