import bodyParser from "body-parser";


import startDB from "./mongoose";

export default async function(app) {

    await startDB();
    console.log('DB Connected')

    // Body Parser
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


    /* TODO: Add Better Error Handler */
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });
    app.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
        return res
            .status(err.status)
            .send({ message: err.message })
            .end();
        }
        return next(err);
    });
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
        errors: {
            message: err.message,
        },
        });
    });

}