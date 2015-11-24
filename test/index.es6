import chai from 'chai';
import React from 'react';
import WinHomepage, { WinHomepageAdPanel } from '../';
import WinTeaser from '@economist/component-win-teaser';
import AdPanel from '@economist/component-ad-panel';

const should = chai.should();
const reserveHeight = 100;
/* eslint-disable no-magic-numbers */
const sizeMapping = [
  [ [ 1024, 1 ], [ [ 970, 250 ], [ 728, 90 ] ] ],
  [ [ 768, 1 ], [ [ 728, 90 ], [ 300, 250 ] ] ],
  [ [ 320, 1 ], [ [ 300, 250 ], [ 1, 1 ] ] ],
];
/* eslint-enable no-magic-numbers */
const sizes = [ [ 0, 0 ] ];
const adTag = '/5605/theworldin';
describe('WIN Homepage', () => {

  it('is compatible with React.Component', () => {
    should.exist(WinHomepage);
    WinHomepage.should.be.a('function');
  });

  it('renders a React element', () => {
    React.isValidElement(<WinHomepage articles={[]}/>).should.equal(true);
  });

  it('has proptypes', () => {
    WinHomepage.propTypes.should.be.an('object');
  });

  describe('rendering', () => {

    it('renders a main component, with an AdPanel component', () => {
      WinHomepage({ articles: [] }).should.deep.equal(
        <main className="world-in-homepage">
          {[
            <WinHomepageAdPanel
              adTag={adTag}
              sizeMapping={sizeMapping}
              sizes={sizes}
              reserveHeight={reserveHeight}
              key="_ad"
            />,
          ]}
        </main>
      );
    });

    it('allows AdPanel props to be overriden', () => {
      WinHomepage({ articles: [], advert: { adTag: 'foo', reserveHeight: 1 } }).should.deep.equal(
        <main className="world-in-homepage">
          {[
            <WinHomepageAdPanel adTag="foo" reserveHeight={1} key="_ad"/>,
          ]}
        </main>
      );
    });

    it('renders first article in `articles` as <WinTeaser variantName=hero/>', () => {
      const articles = [
        {
          dateFormat: '2015-11-02T14:00:00.625Z',
          teaserId: '1',
          title: 'Foo',
        },
      ];
      WinHomepage({ articles }).should.deep.equal(
        <main className="world-in-homepage">
          {[
            <WinTeaser {...articles[0]} key="1" variantName="hero"/>,
            <WinHomepageAdPanel
              adTag={adTag}
              sizeMapping={sizeMapping}
              sizes={sizes}
              reserveHeight={reserveHeight}
              key="_ad"
            />,
          ]}
        </main>
      );
    });

    it('renders subsequent articles as <WinTeaser variantName=default/>', () => {
      const articles = [
        {
          dateFormat: '2015-11-02T14:00:00.625Z',
          teaserId: '2',
          title: 'Foo',
        },
        {
          dateFormat: '2015-11-02T14:00:00.625Z',
          teaserId: '1',
          title: 'Foo',
        },
        {
          dateFormat: '2015-11-02T14:00:00.625Z',
          teaserId: '3',
          title: 'Foo',
        },
      ];
      WinHomepage({ articles }).should.deep.equal(
        <main className="world-in-homepage">
          {[
            <WinTeaser {...articles[0]} key="2" variantName="hero"/>,
            <WinTeaser {...articles[1]} key="1" variantName="default"/>,
            <WinTeaser {...articles[2]} key="3" variantName="default"/>,
            <WinHomepageAdPanel
              adTag={adTag}
              sizeMapping={sizeMapping}
              sizes={sizes}
              reserveHeight={reserveHeight}
              key="_ad"
            />,
          ]}
        </main>
      );
    });

  });

});

describe('WinHomepageAdPanel', () => {

  it('is compatible with React.Component', () => {
    should.exist(WinHomepageAdPanel);
    WinHomepageAdPanel.should.be.a('function');
  });

  it('renders a React element', () => {
    React.isValidElement(<WinHomepageAdPanel/>).should.equal(true);
  });

  it('has proptypes', () => {
    WinHomepageAdPanel.propTypes.should.be.an('object');
  });

  describe('rendering', () => {

    it('renders an aside with <AdPanel {...props}/>', () => {
      WinHomepageAdPanel({ foo: 'bar', baz: 'bing' }).should.deep.equal(
        <aside className="world-in-homepage__advert-panel">
          <AdPanel foo="bar" baz="bing"/>
        </aside>
      );
    });

  });

});
