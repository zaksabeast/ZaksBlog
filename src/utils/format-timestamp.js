export const formatTimestamp = dateString => {
  const timestamp = new Date(dateString);

  try {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    }).format(timestamp);
  } catch {
    return 'Invalid date';
  }
};
