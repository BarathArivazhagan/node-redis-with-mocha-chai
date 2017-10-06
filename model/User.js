

class User{

    constructor(userid,username){
        this.userid=userid;
        this.username=username;

    }

    getUserId(){
        return this.userid;
    }

    getUserName(){
        return this.username;
    }

    setUserId(userid){
        this.userid=userid;
    }

    toString(){
        return JSON.stringify(this);
    }
}


module.exports= User;