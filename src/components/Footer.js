import React from 'react';
import styled from 'styled-components';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../lib/theme/colours';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>
          Built with ♥ by Sam. View site source
          <a href="https://github.com/cubiio/samatkins.me" target="_blank">
            {' '}
            code
          </a>. © 2016-{currentYear} Sam Atkins
        </p>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

/*
Styles
 */

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  overflow: auto;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }
`;
