import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png'
import logomarca from '../../assets/logomarca.png'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
        <img src={logo} alt="Ecoleta"/>
        <img style={{width: 120, marginLeft: 100}} src={logomarca} alt="Ecoleta"/>
        </header>

        <main> 
          <h1>O ponto de encontro da agricultura familiar.</h1>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>

            <strong>Cadastre um ponto de venda</strong>
          </Link>
        </main>
      </div>
    </div>
  )}

export default Home;