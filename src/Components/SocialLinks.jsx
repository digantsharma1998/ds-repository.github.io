import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        id="profile-link"
        href="https://github.com/digantsharma1998"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/digant-sharma-915510145/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Linkedin Profile"
      >
        {' '}
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="https://leetcode.com/DigantSharma/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Leetcode profile"
      >
        {' '}
        <i className="fab fa-leetcode" />
      </a>
      <a
        href="https://www.hackerrank.com/sharmadigant1998"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Hackerrank profile"
      >
        {' '}
        <i className="fab fa-hackerrank" />
      </a>
      <a
        href="https://codepen.io/digantsharma1998"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Codepen profile"
      >
        {' '}
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
};

export default SocialLinks;