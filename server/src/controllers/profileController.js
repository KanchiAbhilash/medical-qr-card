const QRCode = require("qrcode");

const generateProfile = async (req, res) => {
  try {
    const profile = req.body;

    const qrData = JSON.stringify(profile);

    const qrCode = await QRCode.toDataURL(qrData);

    res.json({
      profile,
      qrCode
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = { generateProfile };