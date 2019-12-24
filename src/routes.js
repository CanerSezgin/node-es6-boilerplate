import featureRoute from './components/feature/featureRouter';

const statusCheck = (req, res, next) => res.status(200).json({status: 'ok'})
export default app => {
    app.use('/status', statusCheck)

    app.use('/feature', featureRoute)
}