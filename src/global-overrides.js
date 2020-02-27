const error = window.console.error;

window.console.error = function (message, ...args) {
  error(message, ...args); // keep default behaviour
  throw (message instanceof Error ? message : new Error(message))
}

