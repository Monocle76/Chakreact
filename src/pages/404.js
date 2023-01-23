import { Button, Link, Box } from '@chakra-ui/react'
import React from 'react'
import { Link as Href } from 'wouter'
import Body from '../components/Body'

export default function NotFound() {
  return (
    <Body heading={"Page was Not Found"}>
      <Box>
        <Button colorScheme={"whatsapp"} variant={"ghost"}>
          <Link as={Href} href="/" _hover={"text-decoration: none;"}>Back to homepage?</Link>
        </Button>
      </Box>
    </Body>
  )
}
