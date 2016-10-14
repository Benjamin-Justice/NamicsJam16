class Lives {
    constructor(lives){
        this.lives = lives;
    }

    add(extraLives){
        this.lives += extraLives;
    }

    decrement(){
        this.lives -= 1;
    }

    get(){
        return this.lives;
    }

    isEmpty() {
        console.log(this.lives);
        return this.lives === 0;
    }
}

export default Lives;
