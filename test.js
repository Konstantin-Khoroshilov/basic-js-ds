function removeKFromList(l, k) {
  function add(item, newItem) {
    if (item.next === null) {
      item.next = newItem;
      return;
    }
    add(item.next, newItem);
  }
  let result = {}
  function checkList(l, k) {
    if (l === null) return;
    if (l.value !== k) {
      if (!result.value) {
        result = {value: l.value, next: null};
      } else {
        add(result, { value: l.value, next: null });
      }
    }
    checkList(l.next, k);
  }
  checkList(l, k);
  return result;
}

const list = {
  value: 3,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          }
        }
      }
    }
  }
}
const k = 3;
console.log(removeKFromList(list, k))