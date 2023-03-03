import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  CardFooter,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Loader from './Loader';

function Home() {
  const dispatch = useDispatch();

  const [initialState, setInitialState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://dummyjson.com/products');
      const { products } = data;
      setInitialState(products);
      setLoading(false);
      console.log(products);
    };
    fetchData();
  }, []);
  return (
    <Container maxW={'container.xl'} my={'80px'}>
      <Button
        pos={'fixed'}
        top={'2'}
        right={'10'}
        colorScheme={'blue'}
        onClick={() => dispatch({ type: 'logout' })}
      >
        Logout
      </Button>
      <Heading pos={'fixed'} top={'4'} left={'3'}>
        MStore
      </Heading>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'}>
            {initialState.map(elem => {
              return (
                <Card
                  maxW="sm"
                  style={{ margin: '10px' }}
                  h={'600px'}
                  key={elem.id}
                >
                  <CardBody>
                    <Image
                      src={elem.thumbnail}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      h={'200px'}
                      w={'full'}
                      objectFit={'cover'}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{elem.brand}</Heading>
                      <Text>Category: {elem.category}</Text>
                      <Text>{elem.description}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        Price: ${elem.price}
                      </Text>
                      <Text color="blue.600" fontSize="xl">
                        Discount: {elem.discountPercentage}%
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        Buy now
                      </Button>
                      <Button variant="ghost" colorScheme="blue">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
}

export default Home;
