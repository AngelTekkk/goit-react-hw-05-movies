import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={s.links}>
          <NavLink className={s.button} to="/">
            Home
          </NavLink>
          <NavLink className={s.button} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
