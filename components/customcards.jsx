import CardShowcase from './cards';

const items = [
  {
    id: 1,
    title: 'Card 1',
    image: 'https://picsum.photos/200',
    description: 'This is the first card',
  },
  {
    id: 2,
    title: 'Card 2',
    image: 'https://picsum.photos/200',
    description: 'This is the second card',
  },
  {
    id: 3,
    title: 'Card 3',
    image: 'https://picsum.photos/200',
    description: 'This is the first card',
  },
  {
    id: 4,
    title: 'Card 4',
    image: 'https://picsum.photos/200',
    description: 'This is the second card',
  },  {
    id: 5,
    title: 'Card 5',
    image: 'https://picsum.photos/200',
    description: 'This is the first card',
  },
  {
    id: 6,
    title: 'Card 6',
    image: 'https://picsum.photos/200',
    description: 'This is the second card',
  },  {
    id: 7,
    title: 'Card 7',
    image: 'https://picsum.photos/200',
    description: 'This is the first card',
  },
  {
    id: 8,
    title: 'Card 8',
    image: 'https://picsum.photos/200',
    description: 'This is the second card',
  },  {
    id: 9,
    title: 'Card 9',
    image: 'https://picsum.photos/200',
    description: 'This is the first card',
  },
  {
    id: 10,
    title: 'Card 10',
    image: 'https://picsum.photos/200',
    description: 'This is the second card',
  },
];

export const Recommended = ({userId}) => {
  return (
    <div className='custom_card'>
      <h1 className='heading'>Recommended</h1>
      <CardShowcase items={items} col={3} />
    </div>
  );
};

export const TopPicks = () => {
  return (
    <div className='custom_card'>
      <h1 className='heading'>Top Picks</h1>
      <CardShowcase items={items} col={3} />
    </div>
  );
}

export default Recommended;