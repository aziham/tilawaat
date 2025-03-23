async function fetchPeaks(waveformSrc: string) {
  try {
    const res = await fetch(waveformSrc);
    if (!res.ok) throw new Error('Failed to fetch waveform data');
    const peaks = await res.json();
    return peaks.data;
  } catch (error) {
    console.error('Failed to fetch waveform: ', error);
    return undefined;
  }
}

export default fetchPeaks;
