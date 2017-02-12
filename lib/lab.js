'use strict';

const milk = {
  ingredient: 'Milk',
  quantity: '1 Jug',
  unitOfMeasure: 'Cups',
};
// each ingredient needs to be referenced in recipe.
const butter = {
  ingredient: 'Butter',
  quantity: '1 Stick',
  unitOfMeasure: 'Oz',
};

const flour = {
  ingredient: 'Flour',
  quantity: '1 Bag',
  unitOfMeasure: 'Cups'
};

const eggs = {
  ingredient: 'Eggs',
  quantity: '1 Carton',
  unitOfMeasure: 'Each'
};

const recipe =  {
  name: 'Crepes',
  author: 'Louis Breguet',
  steps:[
    '1. Put 2 cups of flour in a bowl',
    '2. Put 3 eggs in',
    '3. Put 1 stick of butter in',
    '4. Put 3 cups of milk in',
    '5. Using a whip, mix the abo`ve',
    '6. Take out a pan',
    '7. Spread butter on the pan',
    '8. Using a ladle, spread the batter on the pan',
    '9. Flip the crepe',
    '10. Once it looks firm take it off the pan',
    '11. Repeat the above steps until there is no more batter'
  ],
  ingredients: [
    milk,
    butter,
    flour,
    eggs
  ],
  listOfSteps: function () {
    for (let i = 0; i < this.steps.length; i++) {
      let steps = this.steps[i];
      console.log(steps);
    }
  },
  listOfIngredients: function () {
    for (let i = 0; i < this.ingredients.length; i++) {
      let ingredients = this.ingredients[i];
      console.log(ingredients);
    }
  }

};


module.exports = recipe;
