import { Request } from 'express'
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const request = context.req as Request
  console.log(request.get('referer'))
  console.log(request.test)

  return { props: {} }
}
