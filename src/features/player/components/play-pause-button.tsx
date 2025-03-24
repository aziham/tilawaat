import { Button } from '@/shared/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

type PlayPauseButtonProps = {
  isPlaying: boolean;
  size: 'mini' | 'full';
} & React.ComponentProps<'button'>;

function PlayPauseButton({ isPlaying, size, ...props }: PlayPauseButtonProps) {
  const Icon = isPlaying ? Pause : Play;

  return (
    <Button
      className={cn(
        'rounded-full',
        size === 'mini'
          ? 'size-10'
          : "size-16 [&_svg:not([class*='size-'])]:size-7"
      )}
      {...props}
    >
      <Icon fill='white' />
    </Button>
  );
}

export default PlayPauseButton;
