import fs from 'node:fs';

export const beers = [
  {
    id: 1,
    name: 'Buntspecht',
    type: 'Sour - fruited ',
    size: '750ml',
    abv: '6.5% ABV',
    price: 30,
    description: `Buntspecht is a hybrid of mixed fermentation sour beer and red wine. Our approach to brewing sour beer leans heavily on the Belgian lambic tradition. We produce a wort from malted barley, wheat and aged hops that is full of long chain carbohydrates (including starch) that ensure a long and slow fermentation. The fermentation takes place in an oak barrel that previously housed red wine. Our microbial culture consists of yeast and bacteria from Belgian lambic. The beer is allowed to slowly ferment for over a year, after which pinot noir grapes are added. The grapes come from our favorite vintner, Weiß in Oberrußbach, where we also age our barrels. The grapes then fully ferment over the course of two months. The name Buntspecht refers to the great spotted woodpecker, a commonly seen woodpecker in Vienna and surrounding regions.`,
  },
  {
    id: 2,
    name: 'Kohlmeise',
    type: 'Sour - fruited ',
    size: '750ml',
    abv: '6.5% ABV',
    price: 30,
    description: `Kohlmeise is Wappler Brewing's first slowly fermented mixed fermentation sour beer. Our approach leans heavily on the Belgian lambic tradition. We produce a wort from malted barley, wheat and aged hops that is full of long chain carbohydrates (including starch) that ensure a long and slow fermentation. The fermentation takes place in an oak barrel that previously housed red wine. Our microbial culture consists of yeast and bacteria from Belgian lambic. The beer is allowed to slowly ferment for over a year, at which point we bottle it with a bit of sugar to ensure nice carbonation. The name Kohlmeise is German for great tit, a common woodland bird in Austria that often accompanies us while brewing.`,
  },
  {
    id: 3,
    name: 'Mehlschwalbe',
    type: 'Sour - fruited ',
    size: '750ml',
    abv: '6.5% ABV',
    price: 30,
    description: `Mehlschwalbe is a mixed fermentation sour beer with coffee from roasteries in Vienna. Our approach to brewing sour beer leans heavily on the Belgian lambic tradition. We produce a wort from malted barley, wheat and aged hops that is full of long chain carbohydrates (including starch) that ensure a long and slow fermentation. The fermentation takes place in an oak barrel that previously housed red wine. Our microbial culture consists of yeast and bacteria from Belgian lambic. The beer is allowed to slowly ferment for over a year, at which point we add coffee beans. After letting the beans infuse for a few days, we bottle the beer with a bit of sugar to ensure nice carbonation. The name Mehlschwalbe is German for house martin, a swallow that migrates to Austria from Africa for breeding. In summer, these birds build their nests on the outside of our barrel aging cellar.`,
  },
  {
    id: 4,
    name: 'Rotkehlchen',
    type: 'Sour - fruited ',
    size: '750ml',
    abv: '6.5% ABV',
    price: 30,
    description: `Rotkehlchen is Wappler's wild ale with apricots. Our approach to brewing sour beer leans heavily on the Belgian lambic tradition. We produce a wort from malted barley, wheat and aged hops that is full of long chain carbohydrates (including starch) that ensure a long and slow fermentation. The fermentation takes place in an oak barrel that previously housed red wine. Our microbial culture consists of yeast and bacteria from Belgian lambic. The beer is allowed to slowly ferment for over a year, after which we added 350 g/l of apricots. After a second fermentation, we bottled the beer with a dash of sugar for carbonation. Rotkehlchen is German for European robin, one of the cutest little birds you can find close to our sour beer barrels.`,
  },
];
