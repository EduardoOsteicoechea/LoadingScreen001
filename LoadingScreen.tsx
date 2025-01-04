import React from 'react';
import LoadingScreenJSX from './LoadingScreenJSX';

export default function LoadingScreen(props: any): JSX.Element
{
   const [logoLeftCoverState, setLogoLeftCoverState] = React.useState("");
   const [logoRightCoverState, setLogoRightCoverState] = React.useState("");
   const [logoContainerState, setLogoContainerState] = React.useState("loading_screen_logo_outer_container_shrink");
   const [logoContainerZIndexState, setLogoContainerZIndexState] = React.useState("");
   
   const [awaitMessageContainerState, setAwaitMessageContainerState] = React.useState("");
   const [awaitMessageLeftCoverState, setAwaitMessageLeftCoverState] = React.useState("");
   const [awaitMessageRightCoverState, setAwaitMessageRightCoverState] = React.useState("");

   let animation1Id = 0, animation2Id = 0, animation3Id = 0, animation4Id = 0, animation5Id = 0, animation6Id = 0, animation7Id = 0, animation8Id = 0, animation9Id = 0, animation10Id = 0;

   React.useEffect(() =>
   {
      // animation1Id = setTimeout(() =>
      // {
      //    if (logoContainerState === "loading_screen_logo_outer_container_shrink")
      //    {
      //       setLogoContainerState("loading_screen_logo_outer_container_expand");
      //    };

      // }, 1000);

      // animation2Id = setTimeout(() =>
      // {
      //    setLogoContainerZIndexState("loading_screen_logo_outer_container_send_to_back");
      //    setLogoRightCoverState("loading_screen_logo_right_cover_on");
      // }, 5000);

      // animation3Id = setTimeout(() =>
      // {
      //    setAwaitMessageContainerState("loading_screen_prompt_to_await_container_expand");
      // }, 8500);

      // animation4Id = setTimeout(() =>
      // {
      //    setLogoContainerState("loading_screen_logo_outer_container_shrink");
      // }, 8500);

      // animation5Id = setTimeout(() =>
      // {
      //    setLogoContainerZIndexState("loading_screen_logo_outer_container_bring_to_front");
      // }, 12500);

      // animation6Id = setTimeout(() =>
      // {
      //    setAwaitMessageContainerState("loading_screen_prompt_to_await_container_shrink");
      // }, 16500);

      // animation7Id = setTimeout(() =>
      // {
      //    setLogoContainerState("loading_screen_logo_outer_container_expand");
      // }, 16500);

      // animation8Id = setTimeout(() =>
      // {
      //    props.onAnimationComplete();
      // }, 16500);

      return () => { clearTimeout(animation1Id); clearTimeout(animation2Id); clearTimeout(animation3Id); clearTimeout(animation4Id); clearTimeout(animation5Id); clearTimeout(animation6Id); clearTimeout(animation7Id); clearTimeout(animation8Id); clearTimeout(animation9Id); clearTimeout(animation10Id); };

   }, [props.screenLoaderCounter]);

   return (
      <LoadingScreenJSX
         logoLeftCoverState={logoLeftCoverState}
         logoRightCoverState={logoRightCoverState}
         logoContainerState={logoContainerState}
         logoContainerZIndexState={logoContainerZIndexState}
         awaitMessageContainerState={awaitMessageContainerState}
         awaitMessageLeftCoverState={awaitMessageLeftCoverState}
         awaitMessageRightCoverState={awaitMessageRightCoverState}
         screenLoaderCounter={props.screenLoaderCounter}
         pageLoadedState={props.pageLoadedState}
         onAnimationComplete={props.onAnimationComplete}
         fullAnimationTime={props.fullAnimationTime}
         setIsAnimationCycleCompleted={props.setIsAnimationCycleCompleted}
      />
   );
};