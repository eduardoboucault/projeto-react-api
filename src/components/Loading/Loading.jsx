import React from 'react'
import { Spinner } from '@chakra-ui/react'

function Loading() {
  return (
    <Stack direction='row' spacing={4}>
      <Spinner size='xl' />
    </Stack>
  )
}

export default Loading