import chai from 'chai';
const should = chai.should();
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import WinHomepage, {WinHomepageAdPanel} from '../index';
import WinTeaser from '@economist/component-win-teaser';
import AdPanel from '@economist/component-ad-panel';

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
            <WinHomepageAdPanel adTag="/5605/teg.fmsq/wdif/busi" reserveHeight={250} key="_ad"/>,
          ]}
        </main>
      )
    });

    it('allows AdPanel props to be overriden', () => {
      WinHomepage({ articles: [], advert: { adTag: 'foo', reserveHeight: 1 } }).should.deep.equal(
        <main className="world-in-homepage">
          {[
            <WinHomepageAdPanel adTag="foo" reserveHeight={1} key="_ad"/>,
          ]}
        </main>
      )
    });

    it('renders first article in `articles` as <WinTeaser variantName=hero/>', () => {
      const articles = [
        {
          dateFormat: () => {},
          teaserId: '1',
          title: 'Foo',
        },
      ];
      WinHomepage({ articles }).should.deep.equal(
        <main className="world-in-homepage">
          {[
            <WinTeaser {...articles[0]} key="1" variantName="hero"/>,
            <WinHomepageAdPanel adTag="/5605/teg.fmsq/wdif/busi" reserveHeight={250} key="_ad"/>,
          ]}
        </main>
      )
    });

    it('renders subsequent articles as <WinTeaser variantName=default/>', () => {
      const articles = [
        {
          dateFormat: () => {},
          teaserId: '2',
          title: 'Foo',
        },
        {
          dateFormat: () => {},
          teaserId: '1',
          title: 'Foo',
        },
        {
          dateFormat: () => {},
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
            <WinHomepageAdPanel adTag="/5605/teg.fmsq/wdif/busi" reserveHeight={250} key="_ad"/>,
          ]}
        </main>
      )
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
      )
    });

  });

});
