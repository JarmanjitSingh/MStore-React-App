import {
    Container,
    Heading,
    Input,
    Text,
    VStack,
    Button,
  } from '@chakra-ui/react';
  import React from 'react';
import { useDispatch } from 'react-redux';
  import { Link } from 'react-router-dom';
  
  function Login() {
    const dispatch = useDispatch();
    return (
      <Container h={'100vh'} p={'16'} >
        <form>
          <VStack spacing={'8'} alignItems={'stretch'}>
            <Heading>Welcome To MStore</Heading>
            <Input
              placeholder="jarmanjits176@gmail.com"
              type={'email'}
              required
              focusBorderColor="red"
              disabled={'true'}
            />
            <Input
              placeholder="🤫Password is secret"
              type={'password'}
              required
              focusBorderColor="red"
              disabled={'true'}
            />
            
              <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={''}>Forgot password?</Link>
              </Button>
            
            <Button colorScheme={'blue'} type={'submit'} p={'0'}>
              <Link to={'/home'} style={{width: "100%"}} onClick={()=> dispatch({type: "login"})}>Log In</Link>
            </Button> 
            <Text alignSelf={'flex-end'}>
              New User ?
              <Button variant={'link'}>
                  <Link to={'/'}>Sign Up</Link></Button>
            </Text>
            <Text textAlign={'center'} color={'red'}>Note: Without login you cannot access store.</Text>
          </VStack>
        </form>
      </Container>
    );
  }
  
  export default Login;
  