import React from 'react';
import PropTypes from 'prop-types';
import HomePageTemplate from '../../components/HomePageTemplate';

const HomePagePreview = ({ entry }) => {
  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      content={widgetFor('body')}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomePagePreview;
