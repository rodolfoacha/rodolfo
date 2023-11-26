// components/Menu.tsx
import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/LivroLista">
                <a className="nav-link">Catálogo</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados">
                <a className="nav-link">Novo</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
