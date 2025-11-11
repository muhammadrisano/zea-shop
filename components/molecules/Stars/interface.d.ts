import React from 'react';

export interface StarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size: number;
}
