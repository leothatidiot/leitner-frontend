import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import './Flashcard.css'

const SideContent = ({ contentArr }) => {
  // There are two sides of the card,
  // one is the question and the other is the answer

  SideContent.propTypes = {
    contentArr: PropTypes.array
  }

  if (contentArr === undefined) {
    return <></>
  }

  return (
    <Card.Body>
      {contentArr.map((item, index) => (
        <Card.Text key={index} style={{ textAlign: 'center' }}>
          {item}
        </Card.Text>
      ))}
    </Card.Body>
  )
}

const Flashcard = ({ card, carouselRef }) => {
  Flashcard.propTypes = {
    card: PropTypes.object,
    carouselRef: PropTypes.object
  }

  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleQuality = (q) => {
    return () => {
      console.log(`_id = ${card._id}, q = ${q}`)
      // setIsFlipped(!isFlipped)
      carouselRef.current.next()
    }
  }

  return (
    <div className='flashcard-container'>
      <Card style={{ width: '36rem' }}>
        <Card.Body>
          { isFlipped
            ? <SideContent className="backContent" contentArr={card.content.backContent} />
            : <SideContent className="frontContent" contentArr={card.content.frontContent} />
          }
        </Card.Body>
      </Card>

      <br />

      { isFlipped
        ? (
          <div className='buttonGroup'>
            <Button variant='danger' onClick={handleQuality(0)}>重来</Button>
            <Button variant='warning' onClick={handleQuality(1)}>困难</Button>
            <Button variant='primary' onClick={handleQuality(2)}>良好</Button>
            <Button variant='success' onClick={handleQuality(3)}>简单</Button>
          </div>
          )
        : (
          <div className='buttonGroup'>
            <Button onClick={handleFlip}>显示答案</Button>
          </div>
          )
      }

    </div>
  )
}

export default Flashcard
