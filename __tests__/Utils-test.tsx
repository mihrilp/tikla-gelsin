import {getDiscountedPrice, getTotalPrice} from '../src/utils';

describe('Utils', () => {
  test('get total price', () => {
    const arr = [
      {
        id: 1,
        imgUrl: 'https://example.com/image1.jpg',
        name: 'Product 1',
        price: 30.99,
        ingredients: 'Ingredient 1, Ingredient 2',
      },
      {
        id: 2,
        imgUrl: 'https://example.com/image2.jpg',
        name: 'Product 2',
        price: 19,
        ingredients: 'Ingredient 3, Ingredient 4',
      },
      {
        id: 3,
        imgUrl: 'https://example.com/image3.jpg',
        name: 'Product 3',
        price: 14.7,
        ingredients: 'Ingredient 5, Ingredient 6',
      },
    ];
    const result = getTotalPrice(arr);
    expect(result).toBe(64.69);
  });

  test('get discounted price', () => {
    expect(getDiscountedPrice(86.85)).toBe(60.8);
  });
});
