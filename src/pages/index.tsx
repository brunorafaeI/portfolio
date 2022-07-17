import type { GetServerSideProps, NextPage } from 'next'
import Particles from 'react-tsparticles'
import PortfolioParticles from '../components/particles'

import Welcome from '../components/welcome'

type RepoProps = {
  repos: Array<{
    name: string
    description: string
    url: string
  }>
}

const Home: NextPage<RepoProps> = ({ repos }) => {
  return (
    <div className='main-container'>
      <Welcome />
      <PortfolioParticles />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/users/brunorafaeI/repos')
  const repos = await res.json()

  return {
    props: {
      repos
    }
  }

}

export default Home
