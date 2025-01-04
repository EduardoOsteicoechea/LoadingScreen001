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
         const animationsController = [
           [() => setOriginBarHeightState("loading_screen_origin_bar_expand"), 1, ],
           [() => setOriginBarHorizontalLocationState("loading_screen_origin_bar_to_left"), 5],
           [() => setOriginBarHorizontalLocationState("loading_screen_origin_bar_to_left"), 1], // Duplicate, consider removing
           [() => setOriginBarRotationState("loading_screen_origin_bar_half_positive_rotation"), 6],
           [() => setOriginBarHorizontalLocationState("loading_screen_origin_bar_to_right"), 2],
           [() => setOriginBarHeightState("loading_screen_origin_bar_shrink"), 6],
           [props.onAnimationComplete, 1], // Directly use the function
         ];
     
         let timeController = 0;
         const timeDifferencesSum = animationsController.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);
         const timeBasis = props.fullAnimationTime / timeDifferencesSum;
     
         animationsController.forEach((animationData) => 
         {
           const [animation, repetitions, animationName] = animationData;
           timeController += timeBasis * repetitions;
     
            setTimeout(() => 
            {
               console.log("Starting animation:\n     ", animationName);
               animation();
            }, timeController);
         });
     
         return () => 
         {
            let highestTimeoutId = setTimeout(()=>{});
            for (let i = 0; i < highestTimeoutId; i++) 
            {
               console.log("Clearing: ", i);
               clearTimeout(i);
            }
         };

         // console.log("Start");

         // timeController = timeController + (timeBasis * timeDifferences[0]);
         // animation1Id = setTimeout(() =>
         // {            
         //    console.log("Starting:\n    loading_screen_origin_bar_expand");
         //    setOriginBarHeightState("loading_screen_origin_bar_expand");
         // }, timeController);

         // timeController = timeController + (timeBasis * timeDifferences[1]);
         // animation2Id = setTimeout(() =>
         // {            
         //    console.log("Starting:\n    loading_screen_origin_bar_to_left");
         //    setOriginBarHorizontalLocationState("loading_screen_origin_bar_to_left");
         // }, timeController);

         // timeController = timeController + (timeBasis * timeDifferences[2]);
         // animation3Id = setTimeout(() =>
         // {
         //    console.log("Starting:\n    loading_screen_origin_bar_to_left");
         //    setOriginBarHorizontalLocationState("loading_screen_origin_bar_to_left");
         // }, timeController);

         // timeController = timeController + (timeBasis * timeDifferences[3]);
         // animation4Id = setTimeout(() =>
         // {
         //    console.log("Starting:\n    loading_screen_origin_bar_half_positive_rotation");
         //    setOriginBarRotationState("loading_screen_origin_bar_half_positive_rotation");
         // }, timeController);

         // timeController = timeController + (timeBasis * timeDifferences[4]);
         // animation5Id = setTimeout(() =>
         // {
         //    console.log("Starting:\n    loading_screen_origin_bar_to_right");
         //    setOriginBarHorizontalLocationState("loading_screen_origin_bar_to_right");
         // }, timeController);

         // timeController = timeController + (timeBasis * timeDifferences[5]);
         // animation6Id = setTimeout(() =>
         // {
         //    console.log("Starting:\n    loading_screen_origin_bar_shrink");
         //    setOriginBarHeightState("loading_screen_origin_bar_shrink");
         // }, timeController);

         // timeController = timeController + (timeBasis * timeDifferences[6]);
         // animation7Id = setTimeout(() =>
         // {
         //    props.onAnimationComplete();
         // }, timeController);
   
         // return () => 
         // { 

         //    console.log("----------Clearing");
         //    clearTimeout(animation1Id); 
         //    clearTimeout(animation2Id); 
         //    clearTimeout(animation3Id); 
         //    clearTimeout(animation4Id); 
         //    clearTimeout(animation5Id); 
         //    clearTimeout(animation6Id); 
         //    clearTimeout(animation7Id); 
         //    clearTimeout(animation8Id); 
         //    clearTimeout(animation9Id); 
         //    clearTimeout(animation10Id); 
         // };   
      }, [props.screenLoaderCounter, props.pageLoadedState]);
   
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