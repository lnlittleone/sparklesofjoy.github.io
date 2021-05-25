import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const CataloguesPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="Catalogues" description="Catalogues Stampin'up" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-2xl leading-tight font-bold tracking-tight text-pink-400 sm:text-4xl">
              Découvrez les catalogues annuel et saisonniers
            </h1>

            <div className="mt-4 leading-loose">
              <img src="" />

            </div>
          </div>

        </div>
      </div>
    </div>
  </Layout>
)

export default CataloguesPage

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
