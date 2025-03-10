import { asyncHandler } from "../utils/asynchHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Ok",
  });
});

export { registerUser };
