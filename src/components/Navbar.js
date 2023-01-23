import { Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as Href } from "wouter";

export default function Navbar() {
  return (
    <Flex as="nav" py={7} align={"center"}>
      <Text fontSize={25} fontWeight={700} color={"whatsapp"}>My App</Text>
      <Spacer />
      <Flex gap={7}>
        <Link as={Href} href="/">Home</Link>
        <Link as={Href} href="/about">About</Link>
        <Link as={Href} href="/products">Products</Link>
      </Flex>
    </Flex>
  )
}
