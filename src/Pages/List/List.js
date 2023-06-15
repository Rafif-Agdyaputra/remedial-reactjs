import {useCallback, useEffect, useState} from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text
} from "@chakra-ui/react";

const List = () => {
  const [listCredentials, setListCredentials] = useState([]);

  const GetListCredentials = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3003/credentials')
      const lists = await response.json();
      setListCredentials(lists);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    GetListCredentials().then();
  }, []);

  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2' marginBottom='4'>
        <Box p='2'>
          <Heading size='md'>Password Manager</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Add</Button>
        </ButtonGroup>
      </Flex>
      <Flex gap='3'>
        {listCredentials && listCredentials.map((val, index) => (
          <Card maxW='max'>
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{val?.name}</Heading>
                <Text>{val?.url}</Text>
                <Text color='blue.600'>Username: {val?.username}</Text>
                <Text color='blue.600'>Password: {val?.password}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Edit
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Delete
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default List;
