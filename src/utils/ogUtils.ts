export const getFullImageUrl = ({ siteUrl = 'https://diploi.com', imageUrl }: { siteUrl?: string; imageUrl?: string | null }) => {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) return imageUrl;
  return `${siteUrl.replace(/\/$/, '')}${imageUrl}`;
};
