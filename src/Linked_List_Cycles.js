const hasCycle = (linkedList) => {
  let fennecFox = linkedList;
  let anteater = linkedList;

  let stepsTakenByFennecFox = 0;
  let stepLimit = 2;

  while (fennecFox && fennecFox.next) {
    fennecFox = fennecFox.next;
    stepsTakenByFennecFox++;

    if (fennecFox === anteater) {
      return true;
    }

    if (stepsTakenByFennecFox === stepLimit) {
      stepsTakenByFennecFox = 0;
      stepLimit *= 2;
      anteater = fennecFox;
    }
  }

  return false;
};

function Node(val) {
  const obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}
