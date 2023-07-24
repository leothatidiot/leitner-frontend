import React, { useState, useEffect } from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap'

import deckService from '../../services/deck'
import userService from '../../services/user'

function Dashboard () {
  const [decks, setDecks] = useState([])
  const [learningDecks, setLearningDecks] = useState([])

  useEffect(() => {
    // 获取所有可用的deck和正在学习的deck
    // 并将它们分别设置到decks和learningDecks中
    // deckService.setToken(window.localStorage.getItem('authToken'))

    // const allDecks = [
    //   { _id: 1, name: 'Oxford 3000', totalCards: 3000, masteredCards: 1000 },
    //   { _id: 2, name: 'TOEFL Vocabulary', totalCards: 5000, masteredCards: 2000 },
    //   { _id: 3, name: 'GRE Vocabulary', totalCards: 7000, masteredCards: 3000 }
    // ]
    // const learningDecks = [
    //   { _id: 1, name: 'Oxford 3000', totalCards: 3000, masteredCards: 1000 }
    // ]

    // setDecks(allDecks)
    // setLearningDecks(learningDecks)

    deckService.getAllDecks().then(decks => {
      setDecks(decks)
    })

    userService.getDeckByUser().then(learningDecks => {
      setLearningDecks(learningDecks)
    })
  }, [])

  const handleAddDeck = (deckId) => {
    return () => {
      console.log(deckId)
      // setLearningDecks(learningDecks.concat(deckId))
      // userService.updateUserDeck(learningDecks)
    }
  }
  // const handleContinueLearning = () => { }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Dashboard</h2>
      <h4 className="mb-3">Available Decks:</h4>
      <CardGroup>
        {decks.map((deck) => (
          <Card key={deck._id}>
            <Card.Body>
              <Card.Title>{deck.name}</Card.Title>
              <Card.Text>
                Total Cards: {deck.totalCards}<br />
                {/* Mastered Cards: {deck.masteredCards} */}
              </Card.Text>
              <Button variant="primary" onClick={handleAddDeck(deck._id)}>添加</Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <hr className="my-5" />
      <h4 className="mb-3">Learning Decks:</h4>
      <CardGroup>
        {learningDecks.map((deck) => (
          <Card key={deck._id}>
            <Card.Body>
              <Card.Title>{deck.name}</Card.Title>
              <Card.Text>
                Total Cards: {deck.totalCards}<br />
                Mastered Cards: {deck.masteredCards}
              </Card.Text>
              <Button variant="primary" href={`/learning/${deck._id}`}>Continue Learning</Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  )
}

export default Dashboard
