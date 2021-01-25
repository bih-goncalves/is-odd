import { Request, Response } from 'express';
const isNumber = require('is-number');

const numberController = (request: Request, response: Response) => {
    try {
        const n: number= Number(request.params.number);
    
    const result = ((n % 2) == 1);

    response.statusCode = 200;
    response.send({
        result: result
    });
    }
    catch(e) {
        response.statusCode = 404;
        response.send({
            error: 'not a number'
        }) 
}

}

export default numberController;