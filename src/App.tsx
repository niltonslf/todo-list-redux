import { Button, Checkbox, Divider, Flex, Heading, Input, Text, VStack } from '@chakra-ui/react'

function App() {
  const items = [1, 2, 3, 4, 5, 6]

  return (
    <Flex justifyContent='center' background='#2e2e30' width='100%' minHeight='100%' padding='2rem'>
      <Flex
        background='#454c5c'
        width='600px'
        maxWidth='100%'
        minHeight='80%'
        borderRadius='0.5rem'
        border='1px solid #5f6676'
        boxShadow='dark-lg'
        wrap='wrap'
        padding='1rem'
        flexDirection='column'
      >
        <Flex color='white' padding='1rem' justify='center' width='100%'>
          <Heading size='md'>Todo List App</Heading>
        </Flex>

        <VStack width='100%' flex={1}>
          {items.map((item) => (
            <>
              <Flex gap='1rem' width='100%'>
                <Checkbox />
                <Text color='white'>Lorem ipusm</Text>
              </Flex>
              <Divider />
            </>
          ))}
        </VStack>

        <Flex width='100%' gap='1rem'>
          <Input background='white' placeholder='Type new todo' />
          <Button colorScheme='blackAlpha'>Add</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
