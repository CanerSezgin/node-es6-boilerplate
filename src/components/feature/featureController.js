import { Router } from 'express';
import FeatureService from './featureService';

const route = Router()

route.get('/', async (req, res, next) => {
    const { features } = await FeatureService.getList()
    return res.status(200).json(features)
})

route.post('/', async (req, res, next) => {
    try {
        const { name } = req.body
  
        if(name){
            const newFeature = { name: name }
            const {message} = await FeatureService.addFeature(newFeature)
            return res.status(201).json({message})
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

export default route