import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { HTMLContent } from '../components/Content';
import AboutPageTemplate from '../components/AboutPageTemplate';
import Layout from '../components/Layout';

const AboutPage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <Helmet>
        <title>{page.frontmatter.meta_title}</title>
        <meta name="description" content={page.frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`;
