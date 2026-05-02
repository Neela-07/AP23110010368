export function sortByPriority(data) {
  const weight = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  return data.sort((a, b) => {
    if (weight[a.Type] !== weight[b.Type]) {
      return weight[b.Type] - weight[a.Type];
    }
    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });
}