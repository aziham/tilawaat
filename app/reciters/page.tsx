import ReciterCard from '@/shared/components/reciter-card';
import getReciters from '@/shared/helpers/get-reciters';

async function RecitersPage() {
  const reciters = await getReciters();

  return (
    <div className='flex flex-col gap-5 m-5'>
      {reciters.map((reciter) => (
        <ReciterCard key={reciter.id} reciter={reciter} />
      ))}
    </div>
  );
}

export default RecitersPage;
