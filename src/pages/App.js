import { Button, Input, Text, HStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Body from "../components/Body";

function App() {
  var [name, setName] = useState("");
  const input = useRef();
  const handleClick = () => setName(input.current.value)
  return (
    <Body heading={`Welcome to my Chakra App${(name ? ", " : "") + name}`} tag="Welcome!">
      <Text mt={"-7px !important"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias praesentium magnam asperiores ab necessitatibus dolorum tempora iure cupiditate delectus, vero et nihil! Voluptate quibusdam iusto magnam animi fuga at esse repellendus, fugiat, odit eligendi saepe assumenda! Quia, totam blanditiis repellendus corporis, iste nihil consequatur, quos corrupti vel aliquam ipsa.</Text>
      <HStack>
        <Input width="100" focusBorderColor={"green.500"} placeholder="Enter your name" ref={input}/>
        <Button colorScheme={"whatsapp"} size={"md"} width={100} onClick={handleClick}>Click Me!</Button>
      </HStack>
    </Body>
  );
}

export default App;
