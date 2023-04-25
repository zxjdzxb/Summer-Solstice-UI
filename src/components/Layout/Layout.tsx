import s from './Layout.module.scss';
import Header from '@/components/Layout/header';
import Footer from '@/components/Layout/footer';
interface layoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({children, title}: layoutProps) {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>
          <Header title={title}/>
        </div>
        <main className={s.main}>{children}</main>
        <div className={s.footer}>
          <Footer/>
        </div>
      </div>
    </>
  );
}
