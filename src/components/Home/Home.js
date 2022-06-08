import HH from './Home.module.scss';

export function Home() {
  return (
    <div className={HH.home__wrapper}>
      <p className={HH.home__p}> Home - welcome </p>
    </div>
  )
}