import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import { useSelector } from 'react-redux'

import Card from '../components/UI/Card'

jest.mock('react-redux', () => ({ useSelector: jest.fn(() => 'guard'), useDispatch: jest.fn() }))
jest.mock('@react-navigation/native', () => ({ useNavigation: jest.fn(() => ({ navigate: jest.fn() })) }))

const testCardPropsEquality = (jsonComponent, props) => {
  const jsonProps = {
    surname: jsonComponent.children[1].children[0].split(' ')[0],
    name: jsonComponent.children[1].children[0].split(' ')[1],
    secondName: jsonComponent.children[1].children[0].split(' ')[2],
    personnelName: jsonComponent.children[2].children[1].children[0],
    position: jsonComponent.children[2].children[3]
  }
  Object.keys(props).forEach(prop => expect(jsonProps[prop]).toBe(props[prop]))
}

const reRenderWithProps = (Component, props) => {
  return renderer.create(<Component {...props} />).toJSON()
}

describe('Card component renders correctly', () => {
  let renderedComponent = null
  let props = null

  beforeAll(() => {
    props = {
      surname: 'Пархоменко',
      name: 'Дмитро',
      secondName: 'Артемович',
      personnelName: '404',
      position: 'Технолог'
    }
    renderedComponent = reRenderWithProps(Card, { ...props })
  })
  it('renders all usual props', () => {
    testCardPropsEquality(renderedComponent, props)
  })
  it('renders shift for fresh employee', () => {
    renderedComponent = reRenderWithProps(Card, { ...props, lastShift: null })
    const shift = renderedComponent.children[2].children[5]
    expect(shift).toBe('absent')
  })
  it('renders shift for last employee working time', () => {
    renderedComponent = reRenderWithProps(Card, { ...props, lastShift: '3/4/20, 5:15 - 3/4/20, 6:15' })
    const shift = renderedComponent.children[2].children[5]
    expect(shift).toBe('3/4/20, 5:15 - 3/4/20, 6:15')
  })
  it('renders controls for hr', () => {
    useSelector.mockImplementationOnce(() => 'hr')
    renderedComponent = reRenderWithProps(Card, { ...props })
    const editButton = renderedComponent.children[4].children[0].children[0]
    expect(editButton).toBe('EDIT')
    const deleteButton = renderedComponent.children[5].children[0].children[0]
    expect(deleteButton).toBe('DELETE')
  })
})