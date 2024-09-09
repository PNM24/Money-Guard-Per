import React, { CSSProperties } from 'react';

interface PasswordStrengthBarItemProps {
  score: number;
  itemNum: number;
  barColors: string[];
  styleItem: CSSProperties;
}

const itemStyle: CSSProperties = {
  flexBasis: 0,
  flexGrow: 1,
  position: 'relative',
  maxWidth: '100%',
  width: '100%',
  height: 2,
};

const Item: React.FunctionComponent<PasswordStrengthBarItemProps> = ({
  score,
  itemNum,
  barColors,
  styleItem,
}) => {
  let bgColor = barColors[0];
  if (score >= itemNum) {
    bgColor = barColors[score];
  }

  const combinedStyles = { ...itemStyle, ...styleItem, backgroundColor: bgColor }

  return (
    <div
      style={combinedStyles}
    />
  );
};

export default Item;
