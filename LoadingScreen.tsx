import React from 'react';
import logoFilePath from "../../assets/favicon.svg";
import './LoadingScreen.css';
import './LoadingScreenLogo.css';
import './LoadingScreenAwaitMessage.css';

function LoadingScreen(props: any): JSX.Element
{
   const [logoLeftCoverState, setLogoLeftCoverState] = React.useState("");
   const [logoRightCoverState, setLogoRightCoverState] = React.useState("");
   const [logoContainerState, setLogoContainerState] = React.useState("loading_screen_logo_outer_container_shrink");
   const [logoContainerZIndexState, setLogoContainerZIndexState] = React.useState("");
   const [awaitMessageContainerState, setAwaitMessageContainerState] = React.useState("");
   const [awaitMessageLeftCoverState, setAwaitMessageLeftCoverState] = React.useState("");
   const [awaitMessageRightCoverState, setAwaitMessageRightCoverState] = React.useState("");
   const [dynamicLoadingDotsState, setDynamicLoadingDotsState] = React.useState(".");

   let animation1Id = 0;
   let animation2Id = 0;
   let animation3Id = 0;
   let animation4Id = 0;
   let animation5Id = 0;
   let animation6Id = 0;
   let animation7Id = 0;
   let animation8Id = 0;
   let animation9Id = 0;
   let animation10Id = 0;

   React.useEffect(() =>
   {
      animation1Id = setTimeout(() =>
      {
         if(logoContainerState === "loading_screen_logo_outer_container_shrink")
         {
            setLogoContainerState("loading_screen_logo_outer_container_expand");
         };
      }, 1000);

      animation2Id = setTimeout(() =>
      {
         setLogoContainerZIndexState("loading_screen_logo_outer_container_send_to_back");
         setLogoRightCoverState("loading_screen_logo_right_cover_on");
      }, 5000);

      animation3Id = setTimeout(() =>
      {
         setAwaitMessageContainerState("loading_screen_prompt_to_await_container_expand");
      }, 8500);

      animation4Id = setTimeout(() =>
      {
         setLogoContainerState("loading_screen_logo_outer_container_shrink");
      }, 8500);

      animation5Id = setTimeout(() =>
      {
         setLogoContainerZIndexState("loading_screen_logo_outer_container_bring_to_front");
      }, 12500);

      animation6Id = setTimeout(() =>
      {
         setAwaitMessageContainerState("loading_screen_prompt_to_await_container_shrink");
      }, 16500);

      animation7Id = setTimeout(() =>
      {
         setLogoContainerState("loading_screen_logo_outer_container_expand");
         props.onAnimationComplete();
      }, 16500);

      // animation8Id = setTimeout(() =>
      // {
      // }, 22500);

      return () =>
      {
         clearTimeout(animation1Id);
         clearTimeout(animation2Id);
         clearTimeout(animation3Id);
         clearTimeout(animation4Id);
         clearTimeout(animation5Id);
         clearTimeout(animation6Id);
         clearTimeout(animation7Id);
      };

   }, [props.value]);

   /////////////////////////////////
   /////////////////////////////////
   /// DOTS ANIMATION CONTROLLER
   /////////////////////////////////
   /////////////////////////////////

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

   /////////////////////////////////
   /////////////////////////////////
   /// JSX RETURN STATEMENT
   /////////////////////////////////
   /////////////////////////////////

   return (
      <div className="loading_screen_outer_container">
         <div className="loading_screen_component_size_container">

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

            <div className={`loading_screen_prompt_to_await_container ${awaitMessageContainerState}`}>
               <div className="loading_screen_prompt_to_await_message_container">
                  <h2 className="loading_screen_prompt_to_await_message">Please wait briefly.<br />I'm setting up the application{dynamicLoadingDotsState}</h2>
               </div>
               <div className={`loading_screen_prompt_to_await_left_cover ${awaitMessageLeftCoverState}`}></div>
               <div className={`loading_screen_prompt_to_await_right_cover ${awaitMessageRightCoverState}`}></div>
            </div>

         </div>
      </div>
   );
}

export default LoadingScreen;