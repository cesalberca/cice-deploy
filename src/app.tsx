import { useEffect, useState, FC } from 'react'
import { http } from './http'

export const App: FC = () => {
  const [message, setMessage] = useState('')

  async function fetchMessage() {
    const { data } = await http.get('/')
    setMessage(data.answer)
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return <div>Message: {message}</div>
}
