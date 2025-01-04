import LoadingScreenLogo from './LoadingScreenLogo';
import LoadingScreenAwaitMessage from './LoadingScreenAwaitMessage';
import './LoadingScreen.css';

export default function LoadingScreenJSX(props:any): JSX.Element
{
   return (
      <div className="loading_screen_fullscreen_size_container">
         <div className="loading_screen_content_size_container">
            <LoadingScreenLogo
            logoLeftCoverState={props.logoLeftCoverState}
            logoRightCoverState={props.logoRightCoverState}
            logoContainerState={props.logoContainerState}
            logoContainerZIndexState={props.logoContainerZIndexState}
            />
            <LoadingScreenAwaitMessage
            awaitMessageContainerState={props.awaitMessageContainerState}
            awaitMessageLeftCoverState={props.awaitMessageLeftCoverState}
            awaitMessageRightCoverState={props.awaitMessageRightCoverState}
            />
         </div>
      </div>
   );
}