import React from 'react';
import WinTeaser from '../component-win-teaser';
import AdPanel from '../component-ad-panel';

const today = new Date();
export default class WinHomePage extends React.Component {
  static get propTypes() {
    return {
      list: React.PropTypes.array.isRequired,
    };
  }
  static get defaultProps() {
  }
  render() {
    const winteaserList = [];
    this.props.list.map((teaser) => {
      winteaserList.push(
        <WinTeaser {...teaser} key={teaser.teaserId} />
      );
    });
    return (
      <div className="world-in-homepage--container">
        <WinTeaser
          image={{
            src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/images/articles/20140110_ldp001_l.jpg`,
            title: `Just an image`,
          }}
          type= "hero"
          section="United States"
          flyTitle="The UN, religion and development"
          title="Your chance, Mr Obama"
          dateTime={today}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
          link={{
            href: `http://www.economist.com/blogs/erasmus/2015/09/un-religion-and-development-0`,
          }}
          itemType="http://schema.org/BlogPosting"
          itemProp="blogPost"
          teaserId={"100092"}
        />
          <div className="row-01">
          {winteaserList}
            <div className="advert-panel">
              <AdPanel adTag="/5605/teg.fmsq/wdif/busi" reserveHeight={250} />
            </div>
          </div>
      </div>
    );
  }
}
