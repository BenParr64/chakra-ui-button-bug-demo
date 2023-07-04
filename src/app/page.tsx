"use client";
import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    // Simular una carga de estilos (puede ser un tiempo real de carga o un evento de carga)
    setTimeout(() => {
      setStylesLoaded(true);
    }, 2000);
  }, []);
  return (
    <main className="">
      Hover over here and you will see the buttons
      {
      stylesLoaded?
      
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
      :
        <div></div>
      }
    </main>
  );
}
