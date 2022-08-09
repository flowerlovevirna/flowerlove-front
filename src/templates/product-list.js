import React from "react"
import { graphql } from "gatsby"
import { FilterLayout } from "../components/Product/Filter/FilterLayout"

export const ProductQuery = graphql`
  query productListQuery($limit: Int!, $offset: Int!) {
    allSanityProduct(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        publishedAt
        productCategory {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        available
        price
      }
    }
    allSanityProductCategory {
      nodes {
        id
        title
        slug {
          current
        }
      }
    }
  }
`

const ProductList = ({ data, pageContext }) => {
  const { productsLength } = pageContext
  const products = data.allSanityProduct.nodes
  const allCatHome = data.allSanityProductCategory.nodes
  return (
    <FilterLayout
      list
      allCatHome={allCatHome}
      productsLength={productsLength}
      products={products}
    />
  )
}

export default ProductList
