import Subscribe from "../model/subscribe.model.js";

const userSubscription = async (req, res) => {
  try {
    const body = req.body;
    await Subscribe.create(body);
    res.status(201).json({
      message: "You have successfully subscribed to our newsletter",
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
      status: false,
    });
  }
};

export { userSubscription };
