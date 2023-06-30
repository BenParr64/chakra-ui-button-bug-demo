"use client";
import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="">
      Hover over here and you will see the buttons
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
    </main>
  );
}
