import { Router } from 'express';
const route = Router()

route.get('/', (req, res, next) => {
    return res.status(200).json({foo: 'bar'})
})

export default route