// @ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'


export default function Home() {
  useEffect(()=>{
    import("./lit-aditya/dist/bundle")
  },[])
  return (
    <div>
      Hii.
      <my-app></my-app>
    </div>
  )
}

