import React from 'react';
import config from '../../../config';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>{config.copyright}</p>
          <p>
            Докладвай{' '}
            <a href="https://github.com/kufeiko/karadere.info/issues">
              проблем със сайта
            </a>{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
