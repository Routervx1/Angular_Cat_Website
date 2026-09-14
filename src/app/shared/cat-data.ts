export interface Breed {
  name: string;
  origin: string;
  temperament: string;
  description: string;
}

export const CAT_FACTS: string[] = [
  'A group of cats is called a "clowder."',
  "Cats spend around 70% of their lives asleep — that's about 13 to 16 hours a day.",
  'A cat’s purr vibrates between 25 and 150 Hz, a range known to promote healing in bones and tissue.',
  'Cats have a third eyelid called the "haw" that helps protect their eyes.',
  'A cat can jump up to six times its own body length in a single bound.',
  'Cats have scent glands on their cheeks, paws, and tail, which is why they rub against you.',
  'Unlike most mammals, cats walk like camels and giraffes: moving both legs on one side, then the other.',
  'A cat’s nose print is unique, just like a human fingerprint.',
];

export const BREEDS: Breed[] = [
  {
    name: 'Siamese',
    origin: 'Thailand',
    temperament: 'Vocal, social, intelligent',
    description:
      'One of the oldest and most recognizable breeds, known for striking blue eyes, a sleek body, and a habit of "talking" to its people.',
  },
  {
    name: 'Maine Coon',
    origin: 'United States',
    temperament: 'Gentle, playful, loyal',
    description:
      'A gentle giant with a shaggy coat and tufted ears, bred to survive harsh New England winters. Often called the "dog of the cat world."',
  },
  {
    name: 'British Shorthair',
    origin: 'United Kingdom',
    temperament: 'Easygoing, calm, affectionate',
    description:
      'Round-faced and dense-coated, this breed is famous for its teddy-bear look and relaxed, undemanding personality.',
  },
  {
    name: 'Bengal',
    origin: 'United States',
    temperament: 'Energetic, curious, athletic',
    description:
      'Bred from Asian leopard cats, Bengals have a wild, spotted coat and a love of climbing, water, and constant activity.',
  },
  {
    name: 'Ragdoll',
    origin: 'United States',
    temperament: 'Docile, affectionate, relaxed',
    description:
      'Named for its tendency to go limp with relaxation when picked up. Large, blue-eyed, and famously good with families.',
  },
  {
    name: 'Scottish Fold',
    origin: 'Scotland',
    temperament: 'Sweet, adaptable, quiet',
    description:
      'Recognized by its folded ears caused by a natural genetic mutation, giving it a distinctive owl-like expression.',
  },
];
