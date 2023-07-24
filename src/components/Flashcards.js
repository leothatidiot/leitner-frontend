import React, { useState, useRef } from 'react'
import { Carousel, Card, Accordion, Form } from 'react-bootstrap'

export const Flashcard = ({ data }) => {
  const [flashcard, setFlashcard] = useState({ sentense: '', answer: '' })
  const [userAnswer, setUserAnswer] = useState('')
  const inputEl = useRef(null)

  const initFlashcard = () => {
    const randomIndex = Math.floor(Math.random() * data.senses.sense1.examples.length)
    const randomExample = data.senses.sense1.examples[randomIndex]

    // Traditional flour mills are largely being replaced by automated mills.
    setFlashcard({ sentense: randomExample, answer: data['data-hw'] })
  }

  const resizeInput = () => {
    // inputEl.style.width = inputEl.value.length + "ch";
  }

  const handleInput = ({ target }) => {
    setUserAnswer(target.value)
    resizeInput()

    initFlashcard()
  }

  const submitAnswer = () => {

  }

  if (data === undefined) {
    return <></>
  }

  return (
    <Card style={{ width: '70%', margin: 'auto' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        {/* <Card.Text> { data.senses.sense1.examples[0] } </Card.Text> */}

        <Form onSubmit={submitAnswer}>
          <Form.Text>{'It was a stupid thing to do, I '}</Form.Text>
          {/* <Form.Control /> */}
          <input ref={inputEl} onInput={handleInput} value={userAnswer} />
          <Form.Text>{'.'}</Form.Text>

          <Form.Group>
            <Form.Text> {data.pos} </Form.Text>
          </Form.Group>
          <Accordion>
            <Accordion.Item>
              <Accordion.Header>{ data.senses.sense1.define }</Accordion.Header>
              <Accordion.Body> （常指勉强）承认；承认（过错、罪行）；招认；招供 </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Form>
      </Card.Body>
    </Card>
  )
}

export const Flashcards = () => {

}
