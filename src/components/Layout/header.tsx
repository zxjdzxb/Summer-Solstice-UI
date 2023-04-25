import Navs from '@/components/Navs/Navs';
import s from './Layout.module.scss';
interface headerProps {
  title: string;
}

export default function Header(props: headerProps) {
  return (
    <>
      <h2 className={s.title}>
        {props.title}
      </h2>
      <Navs/>
    </>
  );
}
