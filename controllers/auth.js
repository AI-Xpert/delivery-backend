
const connectIonic = async (req, res, next) => {
  try {
    console.log("successfully connected");
    res.status(200).json({
      success: true,
      message: "successfully connected"
    })
  } catch (error) {
    return console.log("not connected");
  }
};

export default {
  connectIonic
}