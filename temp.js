const axios = require('axios');

module.exports = async function (req, res) {
  try {
    const { data } = await axios.get('https://api.mailtm.com/get_temp_mail'); // Replace with actual Mail.tm API endpoint
    const email = data.email;

    res.json({
      email: email,
      message: 'Listening for new emails...',
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch email.' });
  }
};