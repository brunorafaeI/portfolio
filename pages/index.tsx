import type { GetServerSideProps, NextPage } from 'next'

type RepoProps = {
  repos: Array<{
    name: string
    description: string
    url: string
  }>
}

const Home: NextPage<RepoProps> = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo) => (<li key={repo.name}>{repo.name}</li>))}
    </ul>
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
