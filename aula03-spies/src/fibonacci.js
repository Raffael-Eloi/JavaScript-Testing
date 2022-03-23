class Fibonacci {
  *execute (input, current = 0, next = 1) {
    if (input === 0) {
      return 0
    }
    yield current
    //yield como se fosse um returns
    
    // delega a função, mas não retorna valor
    yield* this.execute(input -1, next, current + next)
  }
}

module.exports = Fibonacci