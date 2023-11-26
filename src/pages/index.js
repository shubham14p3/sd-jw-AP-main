// pages/index.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page
    router.replace('/pages/login');
  }, [router]);

  return null; // Return null or any content you want for this page
};

export default Index;
