import LoadingScreenLogo from './LoadingScreenLogo';
import LoadingScreenAwaitMessage from './LoadingScreenAwaitMessage';
import LoadingScreenOriginBar from './LoadingScreenOriginBar';
import './LoadingScreen.css';

export default function LoadingScreen(props: any): JSX.Element
{
   return (
      <div className="loading_screen_fullscreen_size_container">
         <div className="loading_screen_content_size_container">
            <LoadingScreenLogo
               screenLoaderCounter={props.screenLoaderCounter}
               pageLoadedState={props.pageLoadedState}
               onAnimationComplete={props.onAnimationComplete}
               fullAnimationTime={props.fullAnimationTime}
               setIsAnimationCycleCompleted={props.setIsAnimationCycleCompleted}
            />
            {/* <LoadingScreenAwaitMessage
               containerState={props.awaitMessageContainerState}
               leftCoverState={props.awaitMessageLeftCoverState}
               rightCoverState={props.awaitMessageRightCoverState}
               screenLoaderCounter={props.screenLoaderCounter}
               pageLoadedState={props.pageLoadedState}
               onAnimationComplete={props.onAnimationComplete}
            /> */}
            <LoadingScreenOriginBar
               screenLoaderCounter={props.screenLoaderCounter}
               pageLoadedState={props.pageLoadedState}
               onAnimationComplete={props.onAnimationComplete}
               fullAnimationTime={props.fullAnimationTime}
               setIsAnimationCycleCompleted={props.setIsAnimationCycleCompleted}
            />
         </div>
      </div>
   );
}