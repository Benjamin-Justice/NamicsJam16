class Score {
    constructor(){
        this.score = 0;
        this.highscore = 0;
    }

    add(points){
        this.score += points;
        if (this.highscore < this.score){
            this.highscore = this.score;
        }
    }

    get(){
        return this.score;
    }

}

export default Score;
