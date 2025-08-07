// app/components/ContributionGrid.tsx
'use client'

import { useEffect, useState } from 'react'
import classNames from 'classnames'

const GRID_WIDTH = 53 // number of weeks in a year
const GRID_HEIGHT = 7  // days in a week
const SCROLL_DELAY = 200 // milliseconds per frame

// Simple 7x53 matrix for drawing letters
const LETTERS = {
  E: [
    '111',
    '100',
    '111',
    '100',
    '111'
  ],
  N: [
    '101',
    '111',
    '111',
    '111',
    '101'
  ],
  T: [
    '111',
    '010',
    '010',
    '010',
    '010'
  ],
  R: [
    '110',
    '101',
    '110',
    '101',
    '101'
  ],
  Y: [
    '101',
    '101',
    '010',
    '010',
    '010'
  ],
  A: [
    '010',
    '101',
    '111',
    '101',
    '101'
  ],
  S: [
    '111',
    '100',
    '111',
    '001',
    '111'
  ],
  C: [
    '011',
    '100',
    '100',
    '100',
    '011'
  ],
  ' ': [
    '000',
    '000',
    '000',
    '000',
    '000'
  ]
}

function generateMessageGrid(message: string): string[][] {
  const pixels: string[][] = []

  message = message.toUpperCase()
  for (const char of message) {
    const letter = LETTERS[char as keyof typeof LETTERS] || LETTERS[' ']
    for (let row = 0; row < 5; row++) {
      if (!pixels[row]) pixels[row] = []
      pixels[row].push(...letter[row].split(''), '0') // add 1 column gap
    }
  }

  // fill rest rows with empty values
  for (let i = 5; i < GRID_HEIGHT; i++) {
    pixels[i] = Array(pixels[0].length).fill('0')
  }

  return pixels
}

export default function ContributionGrid({ message = 'ENTRA NESTA 🌱' }) {
  const [offset, setOffset] = useState(0)
  const gridData = generateMessageGrid(message)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % gridData[0].length)
    }, SCROLL_DELAY)
    return () => clearInterval(interval)
  }, [gridData])

  return (
    <div className="flex flex-col gap-1 p-4 border border-gray-300 rounded-md w-full max-w-4xl">
      <div className="grid grid-cols-53 gap-0.5">
        {Array(GRID_HEIGHT).fill(0).map((_, rowIdx) => (
          <div key={rowIdx} className="flex gap-0.5">
            {Array(GRID_WIDTH).fill(0).map((_, colIdx) => {
              const x = (colIdx + offset) % gridData[0].length
              const active = gridData[rowIdx][x] === '1'
              return (
                <div
                  key={colIdx}
                  className={classNames(
                    'w-2 h-2 rounded-sm transition-all duration-200',
                    active ? 'bg-green-500' : 'bg-gray-800'
                  )}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
