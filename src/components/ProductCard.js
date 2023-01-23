import { Button, Card, CardBody, CardFooter, CardHeader, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function ProductCard({ imgurl, heading }) {
  var [loading, setLoading] = useState(true)
  return (
    <Card border={"1px solid"} borderColor={"gray.300"}>
      <CardHeader fontSize={"2xl"} fontWeight={600}>{!loading ? heading : "Loading..."}</CardHeader>
      <Image src={imgurl} onLoad={() => setLoading(!loading)}/>
      <CardBody>
        {!loading && <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus qui at ab alias adipisci excepturi aliquid libero dolor, laudantium provident.</Text>}
      </CardBody>
      <CardFooter>
          <Button colorScheme={"whatsapp"}>Buy Now</Button>
      </CardFooter>
    </Card>
  )
}
