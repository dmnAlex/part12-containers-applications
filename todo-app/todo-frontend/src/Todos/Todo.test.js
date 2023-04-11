import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import Todo from './Todo'

test('renders a todoa and can mark it as done', () => {
  const todo = {
    text: 'Buy milk',
    done: false,
  }

  const onClickDelete = jest.fn()
  const onClickComplete = jest.fn()

  render(<Todo todo={todo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />)

  expect(screen.getByText('Buy milk')).toBeInTheDocument()
  expect(screen.getByText('Set as done')).toBeInTheDocument()

  fireEvent.click(screen.getByText('Set as done'))

  expect(onClickComplete).toHaveBeenCalledWith(todo)
  expect(screen.getByText('Delete')).toBeInTheDocument()

  fireEvent.click(screen.getByText('Delete'))

  expect(onClickDelete).toHaveBeenLastCalledWith(todo)
})
