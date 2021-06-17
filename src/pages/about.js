import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        This website represents my first attempt to create... a website! A long way to go but so far I'm loving it!
        </p>
        <p>
        Just a few months ago, I didn't think I could use the terminal without making my laptop explode.
        If I'm writing this page now, it's all thanks to my mentor Ben. 
        </p>
        <p>
        For some reasons that I hope he didn't regret, Ben accepted to help me exploring technical writing and it's been one of the most precious events in my career.
        </p>
        <p>
        I'm not sure that Ben realises how much he did for me - I hope that writing 'thank you' on a .js file,
        would let him understand better:). 
        </p>
        <p>
        Grazie infinite, Ben!
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`