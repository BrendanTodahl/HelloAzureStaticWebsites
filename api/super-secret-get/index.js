module.exports = async function (context, req) {
  try {
      const message = "You are a preferred user and you can see my super secret!"
      context.res.status(200).json(message);
  } catch (error) {
      context.res.status(500).send(error);
  }
};