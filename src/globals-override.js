const error = window.console.error

window.console.error = function (message) {
  error.apply(console, arguments) // keep default behaviour
  throw (message instanceof Error ? message : new Error(message))
}
