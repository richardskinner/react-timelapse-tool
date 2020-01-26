import React from 'react'
import ExampleComponent from './index'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    // expect(ExampleComponent).toBeTruthy()
    expect(<ExampleComponent />).toBeTruthy()
  })
})
