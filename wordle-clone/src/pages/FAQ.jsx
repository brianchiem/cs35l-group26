import React from 'react'
import "./styles/Social.css"
import Questions from '../components/Questions'
import Quest from '../FAQS.json'

const FAQ = () => {
  return (
    <div className='social-1'>
        <h1 >
            FAQ Page
        </h1>
        <div className='FAQ_container'>
        {Quest.map((query) => (
            <Questions key={query.id} query={query}/>
        ))}
        </div>
    </div>

  )
}

export default FAQ