import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>WoojinChemical</title>
        <meta name="description" content="우진케미칼 웹사이트" />
      </Head>

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to WoojinChemical</h1>
        <p>우진케미칼에 오신 것을 환영합니다!</p>
      </div>
    </>
  )
}
