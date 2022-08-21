import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Présentation de l'auteur" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-2xl leading-tight font-bold tracking-tight text-green-900 sm:text-4xl">
              Hi everyone
            </h1>

            <div className="mt-4 leading-loose">
              My name is Hélène, I'm a french thirty-something front-end developer.
              <br/>
              Before that, I was a Comic books seller. I have a degree in this field. (Yep it does exist, I'm not joking).
              <br/>
              I live in Britanny since 2021 after falling in love of Broceliande's forest.
              <br />
              <br />
              I consider myself as a crafty person.
              Watercolor, gouache, bullet journaling, sewing, knitting, scrapbooking.
              <br/> You name it !
              I'm curious about all crafty things but I'm also a food lover.
              I always loved eating and I started by baking things, now I really like to cook and improvise.
              Sometimes, it's really good, other times, not that much XD.
              <br />
              <br />
              I created this little corner of the internet to talk about those things but also about coding.
              Cuz it's my job, I enjoy it and I'm learning lots of things (and I'm pretty sure it's never gonna stop).
              Feel free to contact me at this address.
              <br />
              <a
                href="mailto:sparklesofjoy.su@gmail.com"
                className="text-purple-900 border-b border-purple-900 hover:border-purple-300 hover:text-purple-300"
              >
                sparklesofjoy.su@gmail.com
              </a>
              <br/>
              Enjoy !
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Helene"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
