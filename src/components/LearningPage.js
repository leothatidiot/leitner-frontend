import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

import learningService from '../services/learning'

const LearningPage = ({ card }) => {
  LearningPage.propTypes = {
    card: PropTypes.object
  }

  const [showAnswer, setShowAnswer] = useState(false)
  const [quality, setQuality] = useState(null)

  const handleShowAnswer = () => setShowAnswer(true)
  const handleQuality = (q) => {
    setQuality(q)
    // TODO: submit answer to backend and fetch next card
    const qualityJSON = {
      q: quality
    }
    learningService.submitAnswer(qualityJSON)
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Card #{card.id}</Card.Title>
        <Card.Text>
          {!showAnswer ? card.question : card.answer}
        </Card.Text>
        {!showAnswer && (
          <Button variant="primary" onClick={handleShowAnswer}>
            Show Answer
          </Button>
        )}
        {showAnswer && (
          <>
            <Card.Text>{card.answer}</Card.Text>
            <div>
              <Button variant="danger" onClick={() => handleQuality(0)}>
                Again
              </Button>
              <Button variant="warning" onClick={() => handleQuality(1)}>
                Hard
              </Button>
              <Button variant="primary" onClick={() => handleQuality(2)}>
                Good
              </Button>
              <Button variant="success" onClick={() => handleQuality(3)}>
                Easy
              </Button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default LearningPage