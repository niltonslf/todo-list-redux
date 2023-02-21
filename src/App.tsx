import { Button, Checkbox, Divider, Flex, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, TodoProps, updateTodo } from './features/todo'
import { useAppSelector } from './hooks/use-selector'

const App = () => {
  const [item, setItem] = useState('')

  const items = useAppSelector((state) => state.todo.items)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(addTodo({ name: item, isDone: false }))
    setItem('')
  }

  const handleCheckItem = (index: number) => {
    const payload: TodoProps = { ...items[index], isDone: !items[index].isDone }

    dispatch(updateTodo({ index, todo: payload }))
  }

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
          {items.map((item, index) => (
            <Fragment key={index}>
              <Flex gap='1rem' width='100%'>
                <Checkbox isChecked={item.isDone} onChange={() => handleCheckItem(index)} />
                <Text color='white'>{item.name}</Text>
              </Flex>
              <Divider />
            </Fragment>
          ))}
        </VStack>

        <Flex width='100%' gap='1rem'>
          <Input
            background='white'
            placeholder='Type new todo'
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={(event) => {
              if (event.code == 'Enter') handleAddTodo()
            }}
          />
          <Button colorScheme='blackAlpha' onClick={handleAddTodo}>
            Add
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
