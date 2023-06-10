import React from 'react'
import Modal from '../Components/Modal'
import { useLocation } from 'react-router-dom'

const LoginModal = () => {

  const { search } = useLocation()

  const isLogin = search.endsWith('modal=login')


  if (!isLogin) { return null }

  return (
    <Modal ></Modal>
  )
}

export default LoginModal