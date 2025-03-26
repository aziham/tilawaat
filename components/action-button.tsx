import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

type ActionButtonProps = {
  icon: LucideIcon;
} & React.ComponentProps<'button'>;

function ActionButton({ icon: Icon, ...props }: ActionButtonProps) {
  return (
    <Button
      variant='outline'
      className="size-10 rounded-full [&_svg:not([class*='size-'])]:size-5"
      {...props}
    >
      <Icon />
    </Button>
  );
}

export default ActionButton;
