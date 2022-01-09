import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import components
// import List from '../components/list/list'
import NewList from '../components/new-list/new-list'
// import ProgressBar from '../components/progress-bar/progress-bar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>To do list</title>
        <meta name="description" content="Web Dev 4 project" />
      </Head>
      <h1>Hello Everyone!</h1>
      {/* add your components here */}
      {/* <List />
      <ProgressBar /> */}
      <NewList />
    </div>
  )
}