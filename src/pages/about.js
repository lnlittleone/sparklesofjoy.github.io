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
            <h1 className="text-2xl leading-tight font-bold tracking-tight text-pink-400 sm:text-4xl">
              Hello tout le monde,
            </h1>

            <div className="mt-4 leading-loose">
              Développeuse web le jour, créative le reste du temps, je m'appelle Hélène.
              Fraichement arrivée en Bretagne après être tombée amoureuse de la forêt de Brocéliande,
              j'ai toujours été créative et touche-à-tout concernant les activités créatives.
              <br />
              <br />
              Aquarelle, gouache, bullet journaling, couture, broderie, etc.
              Ma curiosité n'a pas de limites. J'ai découvert le scrapbooking il y a plusieurs années,
              et j'adore réaliser des albums photos, des cartes ou des pages pour mettre en valeur mes souvenirs.
              Etre démonstratrice Stampin'up me permet de découvrir de nouveaux produits de qualités,
              et assouvir ma passion des loisirs créatifs.
              <br />
              <br />
              Si vous souhaitez découvrir ce bel univers ou prendre contact avec moi,
              n'hésitez pas à m'envoyer un email =).
              <br />
              <a
                href="mailto:sparklesofjoy.su@gmail.com"
                className="border-b border-gray-500 hover:border-pink-600 hover:text-pink-600"
              >
                sparklesofjoy.su@gmail.com
              </a>
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
