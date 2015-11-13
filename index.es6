import React from 'react';
import WinTeaser from '@economist/component-win-teaser';
import AdPanel from '@economist/component-ad-panel';

export function WinHomepageAdPanel(props) {
  return (
    <aside className="world-in-homepage__advert-panel">
      <AdPanel {...props}/>
    </aside>
  );
}
if (process.env.NODE_ENV !== 'production') {
  WinHomepageAdPanel.propTypes = AdPanel.propTypes;
}

export default function WinHomePage({
  articles,
  advert = {
    'adTag': '/5605/theworldin',
    'sizes': [ [ 970, 250 ], [ 1, 1 ], [ 300, 250 ], [ 728, 90 ] ],
    reserveHeight: 250,
  }
}) {
  const elements = articles.map((article, index) => (
    <WinTeaser {...article} key={article.teaserId} variantName={index === 0 ? 'hero' : 'default'}/>
  ));
  if (advert) {
    elements.push(<WinHomepageAdPanel {...advert} key="_ad"/>);
  }
  return (
    <main className="world-in-homepage">{elements}</main>
  );
}
if (process.env.NODE_ENV !== 'production') {
  WinHomePage.propTypes = {
    articles: React.PropTypes.arrayOf(
      React.PropTypes.shape(WinTeaser.propTypes)
    ).isRequired,
    advert: React.PropTypes.shape(WinHomepageAdPanel.propTypes),
  };
}
