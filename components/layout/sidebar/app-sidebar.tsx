'use client';

import Link from 'next/link';

import { Compass, Home, Library, Search, Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';

import { AppSidebarTrigger } from './app-sidebar-trigger';

import { useIsMobile } from '@/hooks/use-mobile';

const menuItems = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Explore',
    url: '#',
    icon: Compass
  },
  {
    title: 'Library',
    url: '#',
    icon: Library
  },
  {
    title: 'Search',
    url: '#',
    icon: Search
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings
  }
];

export function AppSidebar() {
  const isMobile = useIsMobile();

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='h-16 border-b flex flex-row items-center -ml-2'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className='hover:bg-transparent active:bg-transparent'
              asChild
            >
              <div>
                <AppSidebarTrigger isMobileSidebar={isMobile} />
                <span>Tilawaat Logo</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
