// pages/index.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import { ChatAssistant } from '../components/chatassistant';
import { useEffect } from 'react';

const IndexPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ChatAssistant />
    </div>
  );
};

export default IndexPage;