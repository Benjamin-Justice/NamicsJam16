function ballHitPaddle(ball, paddle) {

  let diff = 0
  let paddleCenter = paddle.width / 2

  let getDiff = function() {
    let diff = ball.x - paddle.x
    return diff
  }

  console.log(getDiff());

  if (ball.x < paddle.x) {
      //  Ball is on the left-had side of the paddle
      diff = paddle.x - ball.x;
      ball.body.velocity.x = (-5 * diff);
  }

  else if (ball.x > paddle.x) {
      //  Ball is on the right-hand side of the paddle
      diff = ball.x -paddle.x;
      //console.log('diff: ', diff);
      ball.body.velocity.x = (5 * diff);
  }

  else {
      //  Ball is perfectly in the middle
      //  Add a little random X to stop it bouncing straight up!
      ball.body.velocity.x = 2 + Math.random() * 8;
  }
}

export default ballHitPaddle
