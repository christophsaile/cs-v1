export const toBoolean = (prop?: string): boolean => (prop || prop === '') && prop !== 'false';

// eslint-disable-next-line arrow-parens
export const toObject = <T>(prop?: string): T | null => {
  try {
    return JSON.parse(prop || '');
  } catch (_) {
    return null;
  }
};

export const toNumber = (prop?: string): number => {
  let convertedValue = +prop;
  // eslint-disable-next-line no-self-compare
  if (convertedValue !== convertedValue) { // if isNaN
    const float = parseFloat(prop);
    convertedValue = float || float === 0 ? float : convertedValue;
  }
  return convertedValue;
};
