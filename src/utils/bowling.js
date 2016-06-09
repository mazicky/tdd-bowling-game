
export default function getBowlingScore(input) {
  let score = 0
  for (let i=0; i<input.length; ++i) {
    const ball = input.charAt(i)
    const ballScore = parseInt(ball)
    if (!isNaN(ballScore) && '' !== ballScore) {
      score += ballScore
    } else if (ball === '/') {
      return 10
    }
  }

  return score
}
