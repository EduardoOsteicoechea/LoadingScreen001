import logoFilePath from './favicon.svg';
import './LoadingScreenLogo.css';

export default function LoadingScreenLogo(props:any): JSX.Element
{
   return (
      <div className={`loading_screen_logo_outer_container ${props.logoContainerState} ${props.logoContainerZIndexState}`}>
         <div className="loading_screen_logo_content_container">
            <div className="loading_screen_logo_image_container">
               <img src={logoFilePath} className="loading_screen_logo_image" alt="Logo" />
            </div>
            <div className="loading_screen_logo_text_container">
               <h2 className="loading_screen_logo_text_container_main_heading">Eduardo Osteicoechea</h2>
               <h1 className="loading_screen_logo_text_container_main_subheading">Ethical thinking - Gospel Arts - Multiplatform Software</h1>
            </div>
         </div>
         <div className={`loading_screen_logo_left_cover ${props.logoLeftCoverState}`}></div>
         <div className={`loading_screen_logo_right_cover ${props.logoRightCoverState} `}></div>
      </div>
   );
}