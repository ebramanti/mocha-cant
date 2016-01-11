var mochaCant = function (mocha) {
  if (!mocha || mocha._mochaCantIsLoaded) {
    return;
  }

  var Runnable = mocha.Runnable;
  Runnable.prototype.cant = Runnable.prototype.skip;

  mocha._mochaCantIsLoaded = true;
}

module.exports = mochaCant;
