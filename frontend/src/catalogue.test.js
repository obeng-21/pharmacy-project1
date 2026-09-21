import { describe, expect, it } from 'vitest'
import { cartTotal, filterMedicines } from './catalogue.js'

const medicines = [
  { name: 'Paracetamol', category: 'Pain Relief' },
  { name: 'Vitamin C', category: 'Vitamins' },
]

describe('catalogue helpers', () => {
  it('filters by query and category', () => {
    expect(filterMedicines(medicines, 'para', 'Pain Relief')).toEqual([medicines[0]])
  })
  it('calculates the cart total', () => {
    expect(cartTotal([{ price: 12.5, quantity: 2 }, { price: 10, quantity: 1 }])).toBe(35)
  })
})
