import type { CastReceiverOptions } from 'chromecast-caf-receiver/cast.framework';

const ENV = {
  CAST_RECEIVER_OPTIONS: process.env.CAST_RECEIVER_OPTIONS
} as const;

function parse(
  key: keyof typeof ENV
): Record<string, any> | boolean | string | number | undefined {
  const str = ENV[key];
  if (!str) {
    return;
  }
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error(`[ENV] ${key} could not be parsed, value: `, str);
    return undefined;
  }
}

export function getCastReceiverOptions(): CastReceiverOptions | undefined {
  const data = parse('CAST_RECEIVER_OPTIONS');
  if (typeof data === 'object') {
    return data;
  }
}
