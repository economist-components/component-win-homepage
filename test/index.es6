import Teaser from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe(`A teaser`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Teaser.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(
        <Teaser
          title="Required"
          teaserId={'1'}
        />).should.equal(true);
    });
  });
});
