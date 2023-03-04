import React from 'react';
import { Heading, Stack, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  return (
    <Stack
      h={'16'}
      p={'6'}
      pos={'sticky'}
      top={'0'}
      zIndex={'10'}
      bgColor={'white'}
      w={'full'}
      alignItems={'center'}
      justifyContent={'space-between'}
      direction={'row'}
    >
      <Heading>MStore</Heading>
      {/* <Button
          colorScheme={'blue'}
          onClick={(e) => {e.preventDefault(); dispatch({ type: 'logout' })}}
        >
          Logout
        </Button> */}
      <Button colorScheme={'blue'} onClick={(e) => {e.preventDefault(); dispatch({ type: 'logout' })}}>
        <Link
          to={'/'}
          style={{ width: '100%' }}
          
        >
          Log Out
        </Link>
      </Button>
    </Stack>
  );
}

export default Navbar;
