import React from 'react';
import './LoadingScreenOriginBar.css';

export default function LoadingOriginBar(props: any): JSX.Element | null 
{
   if (props.pageLoadedState) 
   {
      return null;
   }
   else
   {
      const [originBarHeightState, setOriginBarHeightState] = React.useState("");
      const [originBarHorizontalLocationState, setOriginBarHorizontalLocationState] = React.useState("");
      const [originBarRotationState, setOriginBarRotationState] = React.useState("");

      React.useEffect(() => 
      {
         const animationsController = 
         [
            [
               () => setOriginBarHeightState("loading_screen_origin_bar_expand"), 
               1, "loading_screen_origin_bar_expand"
            ],
            [
               () => setOriginBarHorizontalLocationState("loading_screen_origin_bar_to_left"), 
               6, "loading_screen_origin_bar_to_left"
            ],
            [
               () => setOriginBarRotationState("loading_screen_origin_bar_half_positive_rotation"), 6, "loading_screen_origin_bar_half_positive_rotation"
            ],
            [
               () => setOriginBarHorizontalLocationState("loading_screen_origin_bar_to_right"), 
               2, "loading_screen_origin_bar_to_right"
            ],
            [
               () => setOriginBarHeightState("loading_screen_origin_bar_shrink"), 
               6, "loading_screen_origin_bar_shrink"
            ],
            [
               props.onAnimationComplete, 1, "onAnimationComplete"
            ]
         ];

         let animationFunctionsTimeoutsIds: number[] = [];
         let timeDifferencesSum = animationsController.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);
         let timeBasis = props.fullAnimationTime / timeDifferencesSum;
         let timeController = 0;
         
         console.log("Starting animation");
         console.log("timeDifferencesSum:\n     ", timeDifferencesSum);
         console.log("timeBasis:\n     ", timeBasis);
         
         animationsController.forEach((animationData) => 
         {
            timeController += timeBasis * animationData[1];
            const animationTimeoutFunctionId = setTimeout(() => 
            {
               console.log("Starting animation:\n     ", animationData[2]);
               animationData[0]();
            }, timeController);

            animationFunctionsTimeoutsIds.push(animationTimeoutFunctionId);
         });

         return () => 
         {
            animationFunctionsTimeoutsIds.forEach((timeoutId) => { console.log("Clearing: ", timeoutId); clearTimeout(timeoutId); });
            animationFunctionsTimeoutsIds = [];
            props.setIsAnimationCycleCompleted(true);
         };
      }, [props.screenLoaderCounter]);

      return (
         <div
            className={`
            loading_screen_origin_bar
            ${originBarHeightState}
            ${originBarHorizontalLocationState} 
            ${originBarRotationState}`
            }>
         </div>
      )
   };
};