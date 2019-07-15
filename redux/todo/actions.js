export const actionTypes = {
  ADD: 'ADD',
};

export function add(title) {
  return {
    type: actionTypes.ADD,
    title,
  };
}
