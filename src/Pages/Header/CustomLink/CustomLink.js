import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{color: match ? '#9345ad' : '#06b6d4',borderTop: match ? '2px solid #9345ad' : '1px solid white' , fontSize: match ? '16px' : '18px', fontWeight: match ? 'bold' : '', background: match? '#f6f6f6e3': 'white'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
};

export default CustomLink;