import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Write from '../components/write'
import Read from '../components/read'
import Header from '../components/header'
import { useState } from 'react'

export default function Home() {
 const [writeToggle,setWriteToggle] =  useState(true)

  return (
    <div>
      <Header isWriteToggle={writeToggle} setWriteToggle={setWriteToggle} />
      {
        writeToggle ? <Write /> : <Read />
      }
    </div>
  )
}
