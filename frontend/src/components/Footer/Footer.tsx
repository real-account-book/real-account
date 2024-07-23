import React from 'react';
import { footerContainer, githubLink, teamName } from './Footer.css';
import { GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  return(
    <div className={footerContainer}>
      <div className={teamName}>김광훈 멘토님 팀 : 김장훈 서동화 팽지우</div>
      <a className={githubLink} href="https://github.com/real-account-book/real-account-book">
        <GithubOutlined style={{marginRight: 5}}/>
        <p>Github</p>
      </a>
    </div>
  );
}

export default Footer;