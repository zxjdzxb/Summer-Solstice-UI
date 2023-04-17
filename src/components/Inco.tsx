import s from './Icon.module.scss';
import '@/pages/api/importIcons.js';

interface IconProps {
  name: string;
}

export default function Icon(props: IconProps) {
  return (
    <span> {props.name}
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
}
