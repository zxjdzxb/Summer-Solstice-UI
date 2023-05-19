import React, {useState} from 'react';
import s from './Tooltip.module.scss';

interface TooltipProps {
  content: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({content, position = 'top', children}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={`${s.tooltip} ${s[`tooltip-${position}`]}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <span className={s.tooltipText}>{content}</span>}
    </div>
  );
};

export default Tooltip;
