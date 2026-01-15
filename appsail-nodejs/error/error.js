class AppError{
    constructor(message,status,res){
        this.message = message;
        this.status = status;
        this.res = res;
    }

    send(){
        this.res.status(this.status);
        this.res.send(this.message);
    }
}

export default AppError;