import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import Card from '../components/UI/Card'

jest.mock('react-redux', () => ({ useSelector: jest.fn(), useDispatch: jest.fn() }))
jest.mock('@react-navigation/native', () => ({ useNavigation: jest.fn(() => ({ navigate: jest.fn() })) }))

describe('Card component renders correctly', () => {
  it('renders as usual', () => {
    const TestComponent = <Card surname="Пархоменко" name="Дмитро" secondName="Артемович"
      personnelName="404" position="Технолог" />
    const renderedComponent = renderer.create(TestComponent).toJSON()
    const fullName = renderedComponent.children[1].children[0]
    expect(fullName).toBe('Пархоменко Дмитро Артемович')
    const personnelName = renderedComponent.children[2].children[1].children[0]
    expect(personnelName).toBe('404')
    const position = renderedComponent.children[2]
    console.log(position)
  })
})