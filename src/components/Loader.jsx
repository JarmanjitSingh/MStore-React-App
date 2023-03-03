import { Image, Stack } from '@chakra-ui/react'
import React from 'react'
import loader from "../assets/spinner.gif"

function Loader() {
  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
      <Image src={loader} alt='loading...' />
    </Stack>
  )
}

export default Loader
