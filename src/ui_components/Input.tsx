import { ChangeEvent } from 'react'

type InputProps = {
  name: string
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ name, value, handleChange }: InputProps): JSX.Element => {
  return <input type='text' name={name} value={value} onChange={handleChange} />
}

export default Input
