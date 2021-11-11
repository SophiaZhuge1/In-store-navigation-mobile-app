export const mapCategoryToColour = (category: string) => {
  switch (category.toLowerCase()) {
    case 'drinks':
      return '#FFC107';
    case 'nuts':
      return '#03A9F4';
    case 'eggs':
      return '#4CAF50';
    case 'fruits':
      return '#FF9800';
    case 'grain':
      return '#F44336';
    case 'cereal':
      return '#9C27B0';
    default:
      return '#FFC107';
  }
};