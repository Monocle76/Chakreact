import { SimpleGrid } from "@chakra-ui/react";
import Body from "../components/Body";
import ProductCard from "../components/ProductCard";

export default function Products() {
  var url = "https://picsum.photos/500/300";
  return (
    <Body heading={"All Products"} tag={"Monday Masala Sale 🔥"}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {[...Array(2)].map((_, i) => {
          return <ProductCard imgurl={url} key={i} heading="New Product"/>
        })}
      </SimpleGrid>
    </Body>
  )
}
