import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface MoreButtonProps {
  url: string;
  label?: string;
}

export function MoreButton({ url, label = 'More' }: MoreButtonProps) {
  return (
    <Button variant='ghost' asChild>
      <Link href={url}>{label}</Link>
    </Button>
  );
}
