import { assert } from 'chai'
import foodNutrients from '../testdata/foodnutrients.json'
import {
  listFoodWithNutrients,
  objectContains,
  filter,
  sort
} from '../../src/reducers/tableReducer'

describe('tableReducer.listFoodWithNutrients', () => {
  it('Lists food with nutrients from nested data', () => {
    assert.isObject(foodNutrients)
    const result = listFoodWithNutrients(foodNutrients)
    assert.isArray(result)
    assert.lengthOf(result, 37)

    result.forEach((row) => {
      assert.hasAllKeys(row, [
        'food',
        'nutrient_id',
        'nutrient',
        'unit',
        'value',
        'gm'
      ])
    })
  })
})

describe('tableReducer.objectContains', () => {
  it('Checks whether any object contains given string', () => {
    const input = {food: 'berry', nutrient: 'carb', value: 22}
    const testData = [
      {
        filterString: 'erry',
        expected: true
      },
      {
        filterString: 'carb',
        expected: true
      },
      {
        filterString: '22',
        expected: true
      },
      {
        filterString: 'oops',
        expected: false
      }
    ]

    testData.forEach((t) => {
      assert.equal(objectContains(t.filterString)(input), t.expected)
    })
  })
})

describe('tableReducer.filter', () => {
  const input = listFoodWithNutrients(foodNutrients)

  it('Does nothing with empty filter string', () => {
    const result = filter(input, '')
    assert.deepEqual(input, result)
  })

  it('Filters objects with the given string', () => {
    const result = filter(input, 'wine')
    assert.lengthOf(result, 3)
  })

  it('Filters objects with the given number in string', () => {
    const result = filter(input, '39')
    assert.lengthOf(result, 1)
    assert.include(result[0].food, 'sake')
  })
})

describe('tableReducer.sort', () => {
  const input = listFoodWithNutrients(foodNutrients)

  it('Sorts by nutrient and ascending order', () => {
    const result = sort(input, 'nutrient', false)
    assert.include(result[0], {food: 'Beef, cured, dried', nutrient: 'Carbohydrate'})
    assert.include(
      result[result.length - 1],
      {food: 'Alcoholic beverage, wine, dessert, sweet', nutrient: 'Energy'}
    )
  })

  it('Sorts by nutrient and descending order', () => {
    const result = sort(input, 'nutrient', true)
    assert.include(result[0], {food: 'Acerola juice, raw', nutrient: 'Energy'})
    assert.include(
      result[result.length - 1],
      {food: 'Beef, cured, dried', nutrient: 'Carbohydrate'}
    )
  })
})
