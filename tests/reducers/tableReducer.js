import foodNutrients from '../testdata/foodnutrients.json'
import { listFoodWithNutrients } from '../../src/reducers/tableReducer'

describe('tableReducer.listFoodWithNutrients', () => {
  it('Listify food with nutrients from nested data', () => {
    expect(foodNutrients).to.be.an('object')
    const result = listFoodWithNutrients(foodNutrients)
    expect(result)
      .to.be.an('array')
      .to.have.length.above(35)

    result.forEach((row) => {
      expect(row).to.have.all.keys([
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
