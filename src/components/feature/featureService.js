import { ErrorHandler } from "../../lib/error";
import Feature from "./featureModel";

class FeatureService {
  async getList() {
    try {
      const list = await Feature.find();
      // ... more
      // ... business
      // ... logic
      return { features: list };
    } catch (error) {
      throw new ErrorHandler(400, "couldn't fetch data", true);
    }
  }

  async addFeature(feature) {
    // Simple Validation
    if (!feature.name) {
      throw new ErrorHandler(422, "name field missing", true);
    }

    try {
      const newFeature = new Feature(feature);
      await newFeature.save();
      return { message: "Successfully Added" };
    } catch (error) {
      throw new ErrorHandler(400, "couldn't created", true);
    }
  }
}

export default new FeatureService();
