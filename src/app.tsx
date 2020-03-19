import React, { useEffect, useState } from 'react'
import { http } from './http'

export function App() {
  const [message, setMessage] = useState('')

  async function fetchMessage() {
    const { data } = await http.get('/')
    setMessage(data.message)
  }

  useEffect(() => {
    fetchMessage()
  }, [])
  return <div>Message: {message}</div>
}
