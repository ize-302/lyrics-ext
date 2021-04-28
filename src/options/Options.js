import React from "react";
import {
  Box,
  Image,
  Text,
  Input,
  Spacer,
  Spinner,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { fetchSong } from "../background";
import logo from "../logo.png";

function Options() {
  const [song, setsong] = React.useState("");
  const [lyrics, setlyrics] = React.useState([]);
  const [query, setquery] = React.useState("");
  const [loading, setloading] = React.useState(false);

  const fireUp = () => {
    setloading(true);
    setsong("");
    fetchSong(query).then((song) => {
      setsong(song);
      let lyrics = song.lyrics;
      lyrics = lyrics.split("\n");
      setlyrics(lyrics);
      setloading(false);
    });
  };

  return (
    <Box
      background="#111"
      minWidth="400px"
      maxH="500px"
      height="100%"
      overflowY="scroll"
      padding={5}
    >
      <HStack>
        <Image src={logo} width="30px" />
        <Input
          size="sm"
          focusBorderColor="#47c7fe"
          borderWidth="1px"
          autoFocus={true}
          background="#222"
          variant="filled"
          placeholder="Search.."
          onChange={(e) => setquery(e.target.value)}
          onKeyPress={(e) => {
            e.key === "Enter" && fireUp();
          }}
          _hover={{}}
          color="white"
          disabled={loading}
        />
      </HStack>

      <Divider
        display={loading || song ? "block" : "none"}
        borderColor="#222"
        marginTop={5}
      />

      {/* loading */}
      {loading && (
        <VStack marginY={8}>
          <Spinner size="xl" thickness="4px" color="#47c7fe" />
        </VStack>
      )}
      {/* result */}
      {song && (
        <Box>
          <Image src={song.albumArt} marginY={5} width="100px" />
          <Box marginBottom={10}>
            {lyrics.map((line, index) => (
              <Text key={index} color="white" fontSize="14px">
                {line === "" ? <Spacer marginY={4} /> : line}
              </Text>
            ))}
          </Box>

          <HStack justifyContent="space-between">
            <a rel="noreferrer" target="_blank" href="https://genius.com">
              <Text color="#ffe603">Powered by Genius</Text>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ize-302/lyrics-ext"
            >
              <Text color="#fff">Source code</Text>
            </a>
          </HStack>
        </Box>
      )}
    </Box>
  );
}

export default Options;
