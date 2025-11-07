export const getUpcomingEvents = async () => {
  try {
    const res = await fetch('/api/events/upcoming');
    if (!res.ok) throw new Error('Failed');
    const data = await res.json();
    console.log('Events loaded:', data); // Check browser console
    return data;
  } catch (err) {
    console.error('Event fetch error:', err);
    return [];
  }
};
