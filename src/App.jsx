import { useState } from 'react'
import './App.css'
import './CrossButton.css'
import CrossButton from './CrossButton';

export default function App() {

  return (
    <>
    <CrossButton buttonSize={'150px'} aRotation={'90deg'} bRotation={'0deg'}/>
    </>
  )
}


