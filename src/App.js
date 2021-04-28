import { ChakraProvider } from "@chakra-ui/react";
import Options from "./options/Options";

function App() {
  return (
    <ChakraProvider>
      <Options />
    </ChakraProvider>
  );
}

export default App;
