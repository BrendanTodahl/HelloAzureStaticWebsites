module.exports = async function (context, req) {
    try {
        const message = "You are authenticated and can see my secret!"
        context.res.status(200).json(message);
    } catch (error) {
        context.res.status(500).send(error);
    }
};