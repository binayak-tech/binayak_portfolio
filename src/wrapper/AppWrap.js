import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

// Its a Higher order component file - using this we can export same fuctionalities
// to all different section of our page.
// We are exporting navigation dots and soical media icons to all our sections using this HOC 

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        
        <div className="app__wrapper app_flex">
            <Component />

            <div className="copyright">
                <p className="p-text">@2023 BINAYAK</p>
                <p className="p-text">All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap