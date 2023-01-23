import { Heading, Link, Tag, VStack, Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

export default function Body({ heading, tag, children }) {
  return (
    <>
    <Container maxW={"5xl"}>
      <Navbar />
      {tag && <Tag colorScheme={"whatsapp"}>{tag}</Tag>}
      <VStack align={"left"} gap={7}>
        {
          heading && <Heading id="heading" mt={2}>
            <Link mr={3} color={"whatsapp"} href="#heading">#</Link>{heading}
          </Heading>
        }
        {children}
      </VStack>
    </Container>
    </>
  )
}
