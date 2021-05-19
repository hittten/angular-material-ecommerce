// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

interface Product {
  id: string
  name: string
  tags?: string[]
}

const productList: Product[] = [
  {
    id:"1",
    name: "product 1",
    tags: ["tag1", "tag2"]
  },
  {
    id:"2",
    name: "product 2",
    tags: ["tag1", "tag2"]
  },
  {
    id: "3",
    name: "product 3"
  }
]

console.log(productList)
