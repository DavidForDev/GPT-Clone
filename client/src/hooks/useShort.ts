export const useShort = (text: string, length: number) => {
  if (!text && text?.length <= length) return text;

  const splitText = text?.slice(0, length);
  const withDots = splitText + "...";

  return withDots;
};
