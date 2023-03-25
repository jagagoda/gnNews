import { Box, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'

const AboutMePopover = () => {
  return (
    <Popover>
    <PopoverTrigger>
      <Box
        role='button'
        aria-label='Some box'
        p={5}
        w='full'
        children='About me'
      />
    </PopoverTrigger>
    <PopoverContent bg='white' color='#030303' border="1px solid #gray.300" boxShadow="0 4px 6px -6px #222" p="2">
      <PopoverHeader fontWeight='semibold'>Trudności i frajda</PopoverHeader>
      <PopoverArrow bg='white' />
      <PopoverCloseButton bg='white' />
      <PopoverBody>
        Bla blabla bla bla blablabla.
      </PopoverBody>
    </PopoverContent>
  </Popover>
  )
}

export default AboutMePopover