import React from 'react'
import Header from '../Common/Header'
import { Outlet } from 'react-router-dom'

export default function MainPage() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  )
}
