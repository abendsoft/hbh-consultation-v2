export const productCount = `#graphql
      query shopifyProductCount {
        productsCount {
          count
        }
      }
    `
export const createProduct = `#graphql
  mutation populateProduct($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        id
      }
    }
  }
`
