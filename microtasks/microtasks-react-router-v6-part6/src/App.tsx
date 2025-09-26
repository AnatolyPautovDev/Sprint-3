import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles';
import {Model} from "./components/pages/Model.tsx";

const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
} as const

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={'/page1'}/>}/>

            <Route path={PATH.ADIDAS} element={<Adidas/>}/>
            <Route path={PATH.PUMA} element={<Puma/>}/>
            <Route path={PATH.ABIBAS} element={<Abibas/>}/>
            <Route path={'/:model/:id'} element={<Model/>}/>

            <Route path={'/*'} element={<Error404/>}/>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
