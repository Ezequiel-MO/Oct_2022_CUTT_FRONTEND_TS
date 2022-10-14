import { useState } from 'react'
import Button from '../../ui_components/Button'
import Input from '../../ui_components/Input'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('username', username)
    console.log('password', password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={username}
        name={username}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <Input
        value={password}
        name={password}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Button handleClick={(event, id) => console.log('clicked', event, id)} />
    </form>
  )
}

export default Login
