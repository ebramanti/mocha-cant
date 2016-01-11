var mochaCant = function (mocha) {
  if (!mocha || mocha._mochaCantIsLoaded) {
    return;
  }

  var Context = mocha.Context;
  Context.prototype.cant = Context.prototype.skip;

  mocha._mochaCantIsLoaded = true;
}

module.exports = mochaCant;
