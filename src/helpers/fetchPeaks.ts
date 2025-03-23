async function fetchPeaks(waveformSrc: string, signal: AbortSignal) {
  try {
    const res = await fetch(waveformSrc, { signal });
    if (!res.ok) throw new Error('Failed to fetch waveform data');
    const peaks = await res.json();
    return peaks.data || undefined;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.info(
        'Waveform fetch aborted to prevent a race condition: A newer request took priority.'
      );
      return;
    }
    console.error('Failed to fetch waveform: ', error);
    return undefined;
  }
}

export default fetchPeaks;
