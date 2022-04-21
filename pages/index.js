import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name='description' content='Twitter Clone with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl font-bold underline'>
        Twitter
      </h1>
    </div>
  )
}
