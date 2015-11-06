import React from 'react';
import WinHomePage from './';

const today = new Date();
const articleList = [
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/images/articles/20140110_usd001_l.jpg`,
      title: `Just an image`,
    },
    variantName: `default`,
    section: `Unitied States`,
    flyTitle: `The UN, religion and development`,
    title: `Mid-term showdown`,
    dateTime: today,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam.`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: ``,
    itemProp: ``,
    teaserId: `1`,
  },
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/images/articles/20140110_chp001_l.jpg`,
      title: `Just an image`,
    },
    variantName: `default`,
    section: `International`,
    flyTitle: ``,
    title: `Pedalling uphill`,
    dateTime: today,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam.`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: ``,
    itemProp: ``,
    teaserId: `2`,
  },
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/images/articles/20140110_amp001_l.jpg`,
      title: `Just an image`,
    },
    variantName: `default`,
    section: `Americas`,
    flyTitle: ``,
    title: `Let the games begin`,
    dateTime: today,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam.`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: ``,
    itemProp: ``,
    teaserId: `3`,
  },
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/images/articles/20140110_eup004_l.jpg`,
      title: `Just an image`,
    },
    variantName: `default`,
    section: `Europe`,
    flyTitle: ``,
    title: `Erdogan’s dilemma`,
    dateTime: today,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam.`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: ``,
    itemProp: ``,
    teaserId: `4`,
  },
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/images/articles/20140110_ldp006_l.jpg`,
      title: `Just an image`,
    },
    variantName: `default`,
    section: `Leaders`,
    flyTitle: ``,
    title: `The coming tech-lash`,
    dateTime: today,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam.`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: ``,
    itemProp: ``,
    teaserId: `5`,
  },
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/original-size/20151003_WOM001_473.png`,
      title: `Just an image`,
    },
    variantName: `default`,
    section: `Leaders`,
    flyTitle: `The UN, religion and development`,
    title: `Migration crisis`,
    dateTime: today,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam.`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: ``,
    itemProp: ``,
    teaserId: `6`,
  },
];
export default (
  <WinHomePage articleList={articleList}/>
);
