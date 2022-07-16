import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = ({ repositories }) => {
  return (
    <ul>
      {repositories.map(repo => (<li key={repo}>{repo}</li>))}
    </ul>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/users/brunorafaeI/repos')
  const data = await res.json()
  const repositories = data.map((item) => item.name)

  return {
    props: {
      repositories
    }
  }

}

export default Home
