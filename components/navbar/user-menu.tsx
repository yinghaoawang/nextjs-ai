'use client';
import { User } from '@prisma/client';
import { Button } from '../ui/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = () => {
    signOut({ redirect: false }).then(() => {
      toast({
        title: 'Logged out'
      });
      router.push('/');
      router.refresh();
    });
  };

  return (
    <>
      <span>Hello {currentUser?.name}!</span>
      <Button onClick={handleSignOut} variant='link' className='text-white'>
        Sign out
      </Button>
    </>
  );
};

export default UserMenu;
