module.exports = {
  plugins: {
    'posthtml-expressions': {
      locals: {
        TITLE: process.env.TITLE ?? '',
        LOGO: process.env.LOGO ?? '',
        PLAYBACK_LOGO_IMAGE: process.env.PLAYBACK_LOGO_IMAGE ?? '',
        CAST_MEDIA_PLAYER_STYLE: process.env.CAST_MEDIA_PLAYER_STYLE ?? ''
      }
    }
  }
};
