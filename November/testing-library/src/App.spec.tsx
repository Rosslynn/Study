import { describe,test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/dom'
import  App  from './App'

describe('App.tsx', () => {
  test('shoud have an increment button', () => {
    render(<App/>)
    const incrementBtn = screen.getByRole('button', { name: /count is/i })

    
  })
})