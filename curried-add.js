function curriedAdd(total) {
  if (total === undefined) return 0;
  return function(next) {
    if (next === undefined) {
      // Return current total if no argument
      return total;
    } else {
      // Otherwise return total + argument
      return curriedAdd(total + next);
    }
  };
}

module.exports = { curriedAdd };
