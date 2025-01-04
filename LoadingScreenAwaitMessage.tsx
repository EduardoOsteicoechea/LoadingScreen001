import React from 'react';
import './LoadingScreenAwaitMessage.css';

export default function LoadingScreenAwaitMessage(props:any): JSX.Element
{
   const [dynamicLoadingDotsState, setDynamicLoadingDotsState] = React.useState(".");
   
   React.useEffect(() => 
   {
      let dynamicLoadingDotsStateValue = ".";
      let animateDotsIntervalId: number = 0;

      const animateDots: VoidFunction = () => 
      {
         animateDotsIntervalId = setInterval(() =>
         {
            if (dynamicLoadingDotsStateValue.length < 3)
            {
               dynamicLoadingDotsStateValue = dynamicLoadingDotsStateValue + ".";
               setDynamicLoadingDotsState(dynamicLoadingDotsStateValue);
            }
            else
            {
               dynamicLoadingDotsStateValue = ".";
               setDynamicLoadingDotsState(dynamicLoadingDotsStateValue);
            };
         }, 750);
      };

      animateDots();
      return () => clearInterval(animateDotsIntervalId);
   }, []);

   return (
      <div className={`loading_screen_prompt_to_await_container ${props.awaitMessageContainerState}`}>
         <div className="loading_screen_prompt_to_await_message_container">
            <h2 className="loading_screen_prompt_to_await_message">Please wait briefly.<br />I'm setting up the application{dynamicLoadingDotsState}</h2>
         </div>
         <div className={`loading_screen_prompt_to_await_left_cover ${props.awaitMessageLeftCoverState}`}></div>
         <div className={`loading_screen_prompt_to_await_right_cover ${props.awaitMessageRightCoverState}`}></div>
      </div>
   );
}