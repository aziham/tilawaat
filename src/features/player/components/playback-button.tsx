import { Button } from '@/shared/components/ui/button';
import { LucideIcon } from 'lucide-react';

type PlaybackButtonProps = {
  icon: LucideIcon;
} & React.ComponentProps<'button'>;

function PlaybackButton({ icon: Icon, ...props }: PlaybackButtonProps) {
  return (
    <Button
      variant='ghost'
      className="size-12 rounded-full [&_svg:not([class*='size-'])]:size-6"
      {...props}
    >
      <Icon strokeWidth={1.3} />
    </Button>
  );
}

export default PlaybackButton;
