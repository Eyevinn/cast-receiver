import { getCastReceiverOptions } from './utils/env';

const context = cast.framework.CastReceiverContext.getInstance();

context.start({
  // The default HLS player is inferior to Shaka Player so we default to using shaka instead.
  // You can read more here: https://developers.google.com/cast/docs/web_receiver/shaka_migration
  useShakaForHls: true,
  ...getCastReceiverOptions()
});
