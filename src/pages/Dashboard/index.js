import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

import deckService from '../../services/deck'
import userService from '../../services/user'

function Dashboard () {
  const [allDecks, setAllDecks] = useState([])
  const [userDecksIDs, setUserDecksIDs] = useState([])

  const navigator = useNavigate()

  useEffect(() => {
    deckService.getAllDecks().then(decks => {
      setAllDecks(decks)
    })

    userService.getDeckByUser().then(decks => {
      setUserDecksIDs(decks)
    })
  }, [])

  // 处理加入学习集按钮的点击事件
  const handleJoinClick = (deck) => {
    // 假设这里有一个API可以将指定的Deck添加到学习集中
    // fetch(`/api/userDecks/${deck.id}`, { method: 'POST' })
    //   .then(response => response.json())
    //   .then(data => {
    //     // 更新decks状态
    //     setDecks(decks => decks.map(d => d.id === data.id ? data : d))
    //   })

    const newUserDecksIDs = userDecksIDs.map(ud => ud._id).concat(deck._id)
    userService.updateUserDeck(newUserDecksIDs).then(decks => {
      setUserDecksIDs(decks)
    })
  }

  return (
    <Card>
      <Card.Header>
        <h1>Dashboard</h1>
      </Card.Header>
      <Card.Body>
      <h2>学习集</h2>
        <ListGroup>
          {allDecks.map(deck => (
            <ListGroupItem key={deck._id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>{deck.name}</h3>
                  <p>卡片总数：{deck.totalCards}</p>
                  <p>已掌握：{Math.floor(Math.random() * 300)} / {deck.totalCards}</p>
                </div>
                <div>
                  { userDecksIDs.includes(deck._id)
                    ? <Button variant="primary"
                        onClick={() => {
                          navigator('/learning', { state: { deck: deck._id } })
                        }}>
                        学习
                      </Button>
                    : <Button variant='primary' onClick={() => handleJoinClick(deck)}>
                        加入学习集！
                      </Button>
                  }
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
        <hr />

        {/* <h2>正在学习</h2>
        <ListGroup>
          {allDecks.filter(deck => deck.isStudying).map(deck => (
            <ListGroupItem key={deck._id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>{deck.name}</h3>
                  <p>卡片总数：{deck.totalCards}</p>
                  <p>已掌握：331 / {deck.totalCards}</p>
                </div>
                <div>
                  <Button variant="primary" onClick={() => {}}>继续学习</Button>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
        <hr />
        <h2>未加入学习集</h2>
        <ListGroup>
          {allDecks.filter(deck => !deck.isStudying).map(deck => (
            <ListGroupItem key={deck._id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>{deck.name}</h3>
                  <p>卡片总数：{deck.totalCards}</p>
                  <p>已掌握：232 / {deck.totalCards}</p>
                </div>
                <div>
                  <Button variant="secondary" onClick={() => handleJoinClick(deck)}>加入学习集</Button>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup> */}
      </Card.Body>
    </Card>
  )
}

export default Dashboard
