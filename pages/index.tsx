import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import HeaderLink from '../components/HeaderLink'
import { Container, Footer, Header, Main } from '../components/Layout'
import { Heading } from '../components/Typography'

import type { NextPage } from 'next'

const description = 'Recipe for preparing a Vegan Yogurt Dipping Sauce'

const FooterSlogan = styled.p`
  margin: 0;
`
const Instruction = styled.p`
  margin: 0;
`
const Section = styled.section`
  display: flex;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Vegan Yogurt Dipping Sauce Recipe - The Brown Beet</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <HeaderLink href="/">The Brown Beet</HeaderLink>
      </Header>

      <Main>
        <Heading>
          Vegan Yogurt Dipping Sauce - Garlic and Herb
        </Heading>

        <Section>
          <div>
            <h2>Directions</h2>
            <Instruction>In a small bowl, mix</Instruction>
          </div>

          <div>
            <h2>Ingredients</h2>
            <ul>
              <li>
                ½ cup Plain, Unsweetened Almond Milk Yogurt
                <br />
                OR any Non-Dairy Yogurt
              </li>
              <li>¼ tsp Garlic Powder</li>
              <li>¼ tsp Onion Powder</li>
              <li>¼ tsp Olive Oil</li>
              <li>¼ tsp Lime Juice</li>
            </ul>
          </div>
        </Section>

        <div>
          <h2>Nutrition Notes</h2>
          <p>Garlic Powder</p>
          <ul>
            <li>Helps reduce blood pressure</li>
            <li>Help to reverse - or even prevent - cardiovascular disease</li>
            <li>Can improve artery function</li>
          </ul>
          <p>Onion Powder</p>
          <ul>
            <li>Helps with high blood pressure</li>
            <li>Contains magnesium</li>
          </ul>
          <p>Olive Oil</p>
          <p>Lime Juice</p>
          <ul>
            <li>Reduces muscle fatigue</li>
            <li>Helps prevent stroke</li>
          </ul>
        </div>
      </Main>

      <Footer>
        <Link href="/">
          <a>
            The Brown Beet
            <br />
            <FooterSlogan>The Root of it All</FooterSlogan>
          </a>
        </Link>
      </Footer>
    </Container>
  )
}

export default Home
