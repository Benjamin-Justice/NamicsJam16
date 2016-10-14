function ballHitPaddle(ball, paddle) {

  let diff = 0
  let paddleCenter = paddle.width / 2

  function posOnPaddle() {
    let diff = paddle.x - ball.x
    return diff
  }

  ball.body.velocity.x = posOnPaddle() * - 5

}

export default ballHitPaddle
