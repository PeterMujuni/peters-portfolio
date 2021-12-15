import React from 'react';
//import all icons
import * as Icons from 'react-icons/si';

export type IconProps = {
    iconName: string
    style: string
}

export const GetIcons = ({iconName, style}: IconProps) => {
  /*create icon element using React.createElement and pass in all icons variable
  and obtain wanted icon with iconName. 
  */
 let icon
   if (iconName === 'SiHtml5' 
    || iconName === 'SiCss3' 
    || iconName === 'SiJavascript' 
    || iconName === 'SiSass' 
    || iconName === 'SiReact'
    || iconName === 'SiTypescript'
    || iconName === 'SiNextdotjs'
    || iconName === 'SiRedux'
    || iconName === 'SiMongodb'
    || iconName === 'SiFirebase'
    || iconName === 'SiNodedotjs'
    || iconName === 'SiGit'
    || iconName === 'SiGithub'
    || iconName === 'SiGnubash'
    || iconName === 'SiNpm'
    || iconName === 'SiAdobephotoshop'
    || iconName === 'SiAdobeillustrator'
    || iconName === 'SiAdobeindesign'
    || iconName === 'SiAdobeaudition') {
    icon = React.createElement(Icons[`${iconName}`]);
   }
  
  return (
    <span style={{color: style}}>{icon}</span>
  );
};