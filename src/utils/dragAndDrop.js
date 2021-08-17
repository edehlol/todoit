export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const onDragEnd = (result, list, updateList) => {
  if (!result.destination) {
    return;
  }
  if (result.source.index === result.destination.index) {
    return;
  }
  const reordered = reorder(list, result.source.index, result.destination.index);
  // updateList(reordered);
  return reordered;
};
