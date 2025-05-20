import { Search, LayoutList, LayoutGrid } from 'lucide-react';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon
} from '@/components/ui/input-group';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function SearchToolbar() {
  return (
    <div className='mt-8 sm:mt-10 mx-5 flex items-center gap-3'>
      <InputGroup>
        <InputGroupInput placeholder='Search...' />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <Tabs defaultValue='list'>
        <TabsList className='h-10'>
          <TabsTrigger value='list'>
            <LayoutList /> List
          </TabsTrigger>
          <TabsTrigger value='grid'>
            <LayoutGrid /> Grid
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
