import * as React from 'react';
import Header from './Header';

type Props = {
  children: any;
};

const BaseStructure = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default BaseStructure;
