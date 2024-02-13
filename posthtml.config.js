/**
 * @param {string} env
 */
function getCastMediaPlayerStyle(env) {
  if (!env) {
    return '';
  }
  try {
    /**
     * @type {(string[])[]}
     */
    let arr;
    try {
      arr = JSON.parse(env);
    } catch (e) {
      throw new Error(
        `Invalid CAST_MEDIA_PLAYER_STYLE ${JSON.stringify(
          env
        )}, must be in format [[style, value]]`
      );
    }
    if (!Array.isArray(arr)) {
      throw new Error(
        `Invalid CAST_MEDIA_PLAYER_STYLE ${JSON.stringify(
          arr
        )}, must be in format [[style, value]]`
      );
    }
    return (
      arr
        .flatMap((entry) => {
          if (!Array.isArray(entry) || entry.length !== 2) {
            throw new Error(
              `Invalid CAST_MEDIA_PLAYER_STYLE entry ${JSON.stringify(
                entry
              )}, each entry must be [style, value]`
            );
          }
          return entry.join(':');
        })
        .join(';') + ';'
    );
  } catch (e) {
    console.error(e);
    return '';
  }
}

module.exports = {
  plugins: {
    'posthtml-expressions': {
      locals: {
        TITLE: process.env.TITLE ?? '',
        LOGO: process.env.LOGO ?? '',
        PLAYBACK_LOGO_IMAGE: process.env.PLAYBACK_LOGO_IMAGE ?? '',
        CAST_MEDIA_PLAYER_STYLE: getCastMediaPlayerStyle(
          process.env.CAST_MEDIA_PLAYER_STYLE ?? ''
        )
      }
    }
  }
};
