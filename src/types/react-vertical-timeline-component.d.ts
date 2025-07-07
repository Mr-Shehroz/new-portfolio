declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '2-columns' | '1-column-left' | '1-column-right';
    lineColor?: string;
    children?: React.ReactNode; // ✅ Add this line
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    onTimelineElementClick?: () => void;
    position?: 'left' | 'right';
    style?: React.CSSProperties;
    textClassName?: string;
    children?: React.ReactNode; // ✅ Add this line
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
