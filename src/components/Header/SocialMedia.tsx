import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: string;
  link: string;
  alt: string;
}

function SocialMedia(props: Props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {/* <FontAwesomeIcon icon={props.icon}/> */}
    </a>
  );
}

export default SocialMedia;
