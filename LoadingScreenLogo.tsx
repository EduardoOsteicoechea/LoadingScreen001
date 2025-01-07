import React from 'react';
import logoFilePath from './favicon.svg';
import './LoadingScreenLogo.css';
import LoadingScreenLogoDataTracker from './LoadingScreenLogoDataTracker';

export default function LoadingScreenLogo(props:any): JSX.Element
{
   const [logoLeftCoverState, setlogoLeftCoverState] = React.useState<string[]>([]); 
   const [logoRightCoverState, setlogoRightCoverState] = React.useState<string[]>([]); 
   const [logoContainerState, setlogoContainerState] = React.useState<string[]>([]); 
   const [logoContainerZIndexState, setlogoContainerZIndexState] = React.useState<string[]>([]);

   

   return (
      <>
         <div className={`loading_screen_logo_outer_container ${logoContainerState} ${logoContainerZIndexState}`}>
            <div className="loading_screen_logo_content_container">
               <div className="loading_screen_logo_image_container">
                  <img src={logoFilePath} className="loading_screen_logo_image" alt="Logo" />
               </div>
               <div className="loading_screen_logo_text_container">
                  <h2 className="loading_screen_logo_text_container_main_heading">Eduardo Osteicoechea</h2>
                  <h1 className="loading_screen_logo_text_container_main_subheading">Ethical thinking - Gospel Arts - Multiplatform Software</h1>
               </div>
            </div>
            <div className={`loading_screen_logo_left_cover ${logoLeftCoverState}`}></div>
            <div className={`loading_screen_logo_right_cover ${logoRightCoverState} `}></div>
         </div>         
            
         <LoadingScreenLogoDataTracker
         screenLoaderCounter={props.screenLoaderCounter}
         pageLoadedState={props.pageLoadedState}
         onAnimationComplete={props.onAnimationComplete}
         fullAnimationTime={props.fullAnimationTime}
         setIsAnimationCycleCompleted={props.setIsAnimationCycleCompleted}
         logoLeftCoverState={logoLeftCoverState}
         logoRightCoverState={logoRightCoverState}
         logoContainerState={logoContainerState}
         logoContainerZIndexState={logoContainerZIndexState}
         />
      </>
   );
}