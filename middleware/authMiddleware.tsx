import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import type { User } from '@/types';

interface AuthMiddlewareProps {
  WrappedComponent: React.FunctionComponent;
  allowedRoles?: string[];
}

const Loading: React.FunctionComponent = () => {
    return React.createElement('div', {}, 'Loading...');
  };

  const AuthMiddleware: React.FunctionComponent<AuthMiddlewareProps> = ({ WrappedComponent, allowedRoles }) => {
    const [user, setUser] = useState<User | undefined>(undefined);
  
    useEffect(() => {
      const token = Cookies.get('token');
  
      if (!token) {
        setUser(undefined);
        return;
      }
  
      try {
        const decodedToken: any = jwtDecode(token);
        const user: User = {
          id: decodedToken.sub,
          name: decodedToken.name,
          roles: decodedToken.roles,
        };
        setUser(user);
      } catch (error) {
        console.log('Failed to decode token', error);
        setUser(undefined);
      }
    }, []);
  
    if (user === undefined) {
      return <Loading />;
    }
  
    if (allowedRoles && !user.roles.some((r) => allowedRoles.includes(r))) {
      return <Forbidden />;
    }
  
    return <WrappedComponent {...props} />;
  };

export default AuthMiddleware;
