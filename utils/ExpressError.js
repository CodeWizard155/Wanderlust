class ExpressError extends Error {
    constructor(statusCode, message) {
        super(); 
        this.stausCode=statusCode;
        this.message=message;
    }
}

module.exports = ExpressError;
