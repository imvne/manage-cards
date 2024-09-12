import { useState } from 'react'
import './App.css'
import CrossButton from './CrossButton';
import './CrossButton.css'

export default function App() {

  return (
    <>
    <CrossButton addOrDeleteStyle={'delete'} buttonSize={'50px'}/>
    <CrossButton addOrDeleteStyle={'add'} buttonSize={'50px'}/>
    </>
  )
}


