import { useState } from 'react'
import './App.css'
import { Input, Button, FormControl, Container, Heading, Flex } from '@yamada-ui/react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const LoginToggle = () => {
  //   const correctEmail = 'sample@email.com'
  //   const correctPassword = 'password'

  //   if (email === correctEmail && password === correctPassword) {
  //     alert('Login Success')
  //   } else {
  //     alert('Login Failed')
  //   }

  //   setEmail('')
  //   setPassword('')
  // }

  const LoginToggle = () => {
    const postData = {
      email: email,
      password: password
    }

    const url = 'http://localhost:8080/api'
    const response = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })

    if (response.ok) {
      alert('Login Success')
    } else {
      alert('Login Failed')
    }
  }

  return (
    <>
      <Flex justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Container style={{ maxWidth: '350px' }}>
        <Heading size="xl">Hiroshima H<br/>Camp & Resort</Heading>
        <FormControl isRequired lable="email" errorMessage="input your name">
            <Input type='text' placeholder='example@email.com' value={email} onChange={ e => setEmail(e.target.value) }/>
        </FormControl>
        <FormControl isRequired lable="Password" errorMessage="input your password">
            <Input type='password' placeholder='Password' value={password} onChange={ e => setPassword(e.target.value) }/>
        </FormControl>
        <Button onClick={LoginToggle}>Login</Button>
        </Container>
      </Flex>
    </>
  );
}

export default App
