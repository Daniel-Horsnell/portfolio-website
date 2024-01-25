import React from 'react';

interface IconLinkProps {
  href: string;
  iconSrc: string;
  altText: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, iconSrc, altText }) => {
  return (
    <a href={href}>
      <img src={iconSrc} alt={altText} />
    </a>
  );
};

export default IconLink;