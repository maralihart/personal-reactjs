export const products = [
  {
    id: 'sandwich',
    number: '01',
    name: 'The everyday loaf',
    type: 'Sourdough sandwich bread',
    description: 'For thick-cut toast, your favorite sandwich, and the last slice you said you would save.',
    ingredients: 'Organic unbleached flour, water, sourdough starter (organic unbleached flour, water), and salt.',
    allergens: 'Contains wheat.',
    photo: {
      src: '/images/sandwich-loaves.webp',
      alt: 'Three freshly baked sourdough sandwich loaves cooling on a rack',
      width: 585,
      height: 323,
    },
    variations: [
      {
        name: 'Date & date syrup',
        ingredients: 'Sandwich loaf base plus dates and date syrup (100% dates).',
        allergens: 'Contains wheat.',
      },
      {
        name: 'Zaatar',
        ingredients: 'Sandwich loaf base plus zaatar (roasted sesame seeds, dried thyme, roasted wheat, soybean oil, salt).',
        allergens: 'Contains wheat, sesame, and soy.',
      },
    ],
    art: 'loaf',
  },
  {
    id: 'focaccia',
    number: '02',
    name: 'A little olive oil magic',
    type: 'Sourdough focaccia',
    description: 'Golden edges, a soft middle, and all those little pockets of olive oil. Made for sharing. Or not.',
    ingredients: 'Sourdough starter (organic unbleached flour, water), salt, water, organic unbleached flour, and organic extra virgin olive oil.',
    allergens: 'Contains wheat.',
    art: 'focaccia',
  },
];

export const starterSteps = [
  {
    day: 'Day 1',
    title: 'Wake it up.',
    text: 'In a clean jar, combine 10 g dehydrated starter with 30 g lukewarm water (not hot). Loosely cover and let soften for 1-2 hours, stirring occasionally. Mix in 30 g organic unbleached flour. Cover loosely again and leave at room temperature, ideally 24-26°C / 75-79°F, for about 24 hours.',
  },
  {
    day: 'Day 2',
    title: 'A little breakfast.',
    text: 'Keep 20 g of the mixture and discard the rest. Stir in 20 g water and 20 g organic unbleached flour. Mark the level with a rubber band, cover loosely, and leave for 24 hours. A few bubbles are encouraging; no big rise yet is normal.',
  },
  {
    day: 'Days 3-7+',
    title: 'Find your rhythm.',
    text: 'Repeat the same feed: 20 g starter, 20 g water, 20 g organic unbleached flour. Feed every 24 hours while activity is slow. Once it rises and falls within 12 hours, feed every 12 hours. Recovery can take a week or longer in a cool kitchen; watch the starter, not just the calendar.',
  },
  {
    day: 'Ready to bake',
    title: 'Look for the lift.',
    text: 'Your starter is ready when it reliably doubles within 4-8 hours of a feed for at least two consecutive feedings, with bubbles throughout and a pleasantly tangy smell. Use it near its peak. A float test alone is not a reliable readiness test.',
  },
];

export const recipes = {
  pancakes: {
    title: 'Sourdough pancakes',
    subtitle: 'A slower morning. A very good stack.',
    tag: 'For the weekend',
    time: '25 minutes',
    yield: 'About 8 pancakes',
    intro: 'A simple way to use discard from a healthy, established starter. These are a starting-point kitchen recipe, ready for your favorite fruit and a generous drizzle of maple syrup.',
    ingredients: [
      '120 g sourdough discard (100% hydration)',
      '120 g organic unbleached flour',
      '180 ml milk, plus a splash if needed',
      '1 large egg',
      '2 tablespoons melted butter, cooled, plus more for the pan',
      '1 tablespoon honey',
      '1 teaspoon baking powder',
      '1/2 teaspoon baking soda',
      '1/4 teaspoon salt',
    ],
    method: [
      'Whisk the discard, milk, egg, honey, and cooled melted butter in a bowl until combined.',
      'In another bowl, mix the organic unbleached flour, baking powder, baking soda, and salt. Fold the wet ingredients into the dry just until no dry streaks remain. A few lumps are fine. If very thick, add a small splash of milk.',
      'Warm a lightly buttered skillet over medium-low heat. Scoop about 1/4 cup batter per pancake, leaving room between them.',
      'Cook for 2-3 minutes, until bubbles form and the edges look set. Flip and cook another 1-2 minutes, adjusting the heat as needed, until both sides are golden and the center is cooked through, not wet.',
      'Serve warm. Refrigerate leftovers within 2 hours and eat within 3-4 days, or freeze for up to 2 months. Reheat until hot throughout.',
    ],
    note: 'Contains wheat, milk, and egg. Never use discard with mold, pink or orange streaks, or a rotten smell. Do not taste raw batter.',
    art: 'pancakes',
  },
  'french-toast': {
    title: 'Meal-prep French toast',
    subtitle: 'Make Sunday do a little of Monday’s work.',
    tag: 'For the week ahead',
    time: '30 minutes',
    yield: '4 servings',
    intro: 'Yesterday’s sourdough makes tomorrow’s breakfast. Cook a batch, tuck it away, and bring it back to life in a skillet or oven when the week gets busy.',
    ingredients: [
      '8 thick slices sourdough sandwich bread',
      '3 large eggs',
      '180 ml milk',
      '1 tablespoon maple syrup',
      '1 teaspoon vanilla extract',
      '1 teaspoon ground cinnamon',
      'A pinch of salt',
      '1 tablespoon butter, plus more as needed for the pan',
    ],
    method: [
      'Whisk the eggs, milk, maple syrup, vanilla, cinnamon, and salt in a shallow dish.',
      'Dip each slice into the custard for about 15-20 seconds per side. Aim for soaked, not falling apart; very fresh bread needs less time.',
      'Melt a little butter in a skillet over medium-low heat. Cook the slices in batches for 3-4 minutes per side until golden and the egg mixture in the center is fully set (71°C / 160°F).',
      'For meal prep, arrange cooked slices in a single layer to cool briefly, then refrigerate in a shallow covered container within 2 hours. Keep in the fridge for 3-4 days, or freeze separated with parchment for up to 2 months.',
      'Reheat refrigerated or frozen slices on a tray in a 175°C / 350°F oven until the center reaches 74°C / 165°F. Timing depends on thickness and whether frozen. Add fruit and syrup just before serving.',
    ],
    note: 'Contains wheat, milk, and egg; check your bread’s full ingredient list for additional allergens. Store toppings separately.',
    art: 'toast',
  },
};
