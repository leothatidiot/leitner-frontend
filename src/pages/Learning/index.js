import React, { useState, useEffect, useRef } from 'react'

import Flashcard from '../../components/Flashcard'

// import learningService from '../../services/learning'
// import cardService from '../../services/card'
// eslint-disable-next-line no-unused-vars
import { Carousel } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const Learning = () => {
  const { state } = useLocation()
  const { deck } = state
  const [schedule, setSchedule] = useState([])
  // const [curCard, setCurCard] = useState({ frontContent: [], backContent: [] })

  // useEffect(() => {
  //   learningService.getSchedule('6435be870c7db08fd512a6b9').then(schedule => {
  //     setSchedule(schedule)
  //   })

  //   cardService.getCardById('6435bf2c0433ad62ec09dbfa').then(curCard => {
  //     setCurCard(curCard)
  //     console.log(curCard, 'curCard')
  //   })
  // }, [])
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    setSchedule([
      {
        _id: '6435c1820433ad62ec0a0950',
        content: {
          frontContent: ['whip', 'verb', 'He was taken back to the jail and soundly whipped. '],
          backContent: ['to hit a person or an animal hard with awhip, as a punishment or to make them go faster or work harder']
        }
      },

      {
        _id: '6435c0f10433ad62ec09fe5c',
        content: {
          frontContent: ['reserve', 'verb', "I'd like to reserve a table for three for eight o'clock."],
          backContent: ['to ask for a seat, table, room, etc. to be available for you or somebody else at a future time']
        }
      },

      {
        _id: '6435c1890433ad62ec0a09e4',
        content: {
          frontContent: ['worse', 'adverb', 'Working-class children fared rather worse. '],
          backContent: ['less well']
        }
      },

      {
        _id: '6435bff60433ad62ec09eb94',
        content: {
          frontContent: ['fancy', 'verb', 'Fancy a drink? '],
          backContent: ['to want something or want to do something']
        }
      },

      {
        _id: '6424ab5183600bac6b3b933a',
        content: {
          frontContent: ['steady', 'adjective', 'We\'ve had five years of steady economic growth . '],
          backContent: ['developing, growing, etc. gradually and in an even and regular way']
        }
      },

      {
        _id: '6435c0950433ad62ec09f726',
        content: {
          frontContent: ['nightmare', 'noun', 'He still has nightmares about the accident. '],
          backContent: ['a dream that is very frightening or unpleasant']
        }
      },

      {
        _id: '6435c1190433ad62ec0a016e',
        content: {
          frontContent: ['situated', 'adjective', 'My bedroom was situated on the top floor of the house. '],
          backContent: ['in a particular place or position']
        }
      }
    ])
  }, [])

  if (schedule.length === 0) {
    return <></>
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: '2%'
    }}>
      {schedule.length.a}
      {deck.a}

      <Carousel ref={carouselRef} variant="dark"
        interval={null} controls={false} indicators={false}
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
      >
        {schedule.map((card, index) => (
          <Carousel.Item key={index}>
            <Flashcard card={card} carouselRef={carouselRef} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* <Flashcard frontContent={curCard.frontContent} backContent={curCard.backContent} />
      {/* <Flashcard card={schedule[0]} /> */}
    </div>
  )
}

export default Learning
