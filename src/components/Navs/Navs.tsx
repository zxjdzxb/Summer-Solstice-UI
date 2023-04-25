import {useRouter} from 'next/router';
import Link from 'next/link';

// routerList name and link
const routerList = [
  {text: '网站首页', link: '/'},
  {text: 'Dialog', link: '/DialogPage'},
  {text: '自我介绍', link: '/about'},
];

interface navsProps {
  text: string;
  link: string;
  currentpage: string;
}

export default function Navs() {
  const router = useRouter(),
    currentPage = router.pathname;
  console.log(router.pathname);
  return (
    <nav>
      <ul>
        {routerList.map((item) => (
          <NavItem
            key={item.link}
            text={item.text}
            link={item.link}
            currentpage={currentPage}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({text, link, currentpage}: navsProps) {
  if (link === currentpage) {
    return (
      <li className="active">
        <strong>{text}</strong>
      </li>
    );
  } else {
    return (
      <li>
        <Link href={link}>
          <div>{text}</div>
        </Link>
      </li>
    );
  }
}
