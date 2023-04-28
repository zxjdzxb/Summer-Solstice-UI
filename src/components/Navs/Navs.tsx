import {useRouter} from 'next/router';
import Link from 'next/link';

// routerList name and link
const routerList = [
  {text: '网站首页', link: '/'},
  {text: 'Dialog', link: '/DialogPage'},
  {text: '文章列表', link: '/Articles?page=1'},
  {text: '文章详情', link: '/Articles/[id]'},
  {text: '井字小游戏', link: '/Wellhead'},
];

interface navsProps {
  text: string;
  link: string;
  currentpage: string;
}

export default function Navs() {
  const router = useRouter(),
    currentPage = router.pathname;
  // /Articles/[id] 不可以直接使用
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
        {link === '/Articles/[id]' ? null :
          <Link href={link}>
            <div>{text}</div>
          </Link>
        }
      </li>
    );
  }
}
