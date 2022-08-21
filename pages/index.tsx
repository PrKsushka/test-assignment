import type { NextPage } from 'next'
import Cards from "../components/cards/cards";
import Layout from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Layout>
        <Cards />
        <div id="portal"></div>
    </Layout>
  )
}

export default Home;
