import Feature from './featureModel';

class FeatureService {

    async getList() {
        const list = await Feature.find()
        // ... more
        // ... business
        // ... logic
        return { features: list }
    };

    async addFeature(feature) {
        const newFeature = new Feature(feature)
        await newFeature.save()
        return { message: 'Successfully Added' }
    }


}

export default new FeatureService()