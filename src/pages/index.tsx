import type { NextPage } from 'next'
import { Main } from '../assets/styles/shared'

import Welcome from '../components/welcome'

const Home: NextPage = () => {
  return (
    <Main>
      <Welcome />
    </Main>
  )
}

export default Home
