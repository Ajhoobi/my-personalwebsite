function filterByCategory(originalData, targetCategory) {
  const filteredData = originalData.filter(item => item.catogery === targetCategory);
  return filteredData;
}

export default filterByCategory