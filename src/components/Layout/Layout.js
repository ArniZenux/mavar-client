import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import LL from './Layout.module.scss';

export function Layout({ children }) {
  return (
    <div>
    <Header />

    <main className={LL.layout__main}>
      {children}
    </main>
      
    <Footer />

    </div>
  )
}