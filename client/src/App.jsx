import { useState } from 'react'
import Header from './components/header'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Form from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="xl:w-2/3 mx-auto bg-white">
      <Header></Header>
      <Feature
        headline='Heavy duty'
        blurb='We build anything you require. It will be secure, powerful and fast.
          We then reliably maintain your projects with minimal fuss. '></Feature>
        <Feature
        headline='Trade prices'
        blurb='We use the latest tech and efficient systems to keep costs competitive. We are no nonsense and affordable.'></Feature>
        <Feature
        headline='Satisfaction Guaranteed'
        blurb='Most services build complicated apps that then make it difficult for you to understand yourself. 
        This makes it harder for you to leave for a cheaper or better alternative.
        We use clear, simple code that is well commented and easy to pass onto another company or even a non technical employee.'></Feature>
        <Feature
        headline='Get a free quote'
        blurb='Fill out our quick form and we will get back to you with a completely free assessment'
        form={<Form/>}></Feature>
      <Footer></Footer>
    </div>
  )
}

export default App
