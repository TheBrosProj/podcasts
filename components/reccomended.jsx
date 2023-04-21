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
];

const Recommended = () => {
  return (
    <div>
      <h1 className='heading'>Recommended</h1>
      <CardShowcase items={items} />
    </div>
  );
};

export default Recommended;