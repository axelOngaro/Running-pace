import { Box, flex } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box
      width="100"
      height="20"
      bg="grey"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontWeight="700"
      fontSize="2rem"
    >
      <h1>Running pace conversion chart</h1>
    </Box>
  );
}

export default Navbar;
