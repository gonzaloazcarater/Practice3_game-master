class Boss extends Opponent{
    constructor(game){
        super(game);
        this.speed = 2*OPPONENT_SPEED;
        this.myImageSrc = BOSS_PICTURE;
        this.myImageDeadSrc = BOSS_DEAD;
    }
}