import React from 'react';
import { HTMLContent as Content } from '../Content';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const HomePageTemplate = ({
  title,
  meta_title,
  meta_description,
  contentComponent,
  content,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h1 className="title">{title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <div className="section main-section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section text-section">
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default HomePageTemplate;
