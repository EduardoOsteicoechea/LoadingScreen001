import React from 'react';
import './LoadingScreenOriginBarDataTracker.css';
import LoadingScreenOriginBarDataTrackerItem from './LoadingScreenOriginBarDataTrackerItem'

export default function LoadingScreenLogoDataTracker(props: any): JSX.Element
{
   const initialTime = getCurrentTimeAsString();
   const componentInitialState = initialTime + "--" + "Empty Initial State";
   
   const [logoLeftCoverStateData, setlogoLeftCoverStateData] = React.useState<string[]>([componentInitialState]);
   const [logoRightCoverStateData, setlogoRightCoverStateData] = React.useState<string[]>([componentInitialState]);
   const [logoContainerStateData, setlogoContainerStateData] = React.useState<string[]>([componentInitialState]);
   const [logoContainerZIndexStateData, setlogoContainerZIndexStateData] = React.useState<string[]>([componentInitialState]);

   React.useEffect(()=>
   {
      const currentTime = getCurrentTimeAsString();
      setlogoLeftCoverStateData(prevState => [...prevState, currentTime + "--" + props.logoLeftCoverState]);
   }, [props.logoLeftCoverState]);

   React.useEffect(()=>
   {
      const currentTime = getCurrentTimeAsString();
      setlogoRightCoverStateData(prevState => [...prevState, currentTime + "--" + props.logoRightCoverState]);
   }, [props.logoRightCoverState]);

   React.useEffect(()=>
   {
      const currentTime = getCurrentTimeAsString();
      setlogoContainerStateData(prevState => [...prevState, currentTime + "--" + props.logoContainerState]);
   }, [props.logoContainerState]);

   React.useEffect(()=>
   {
      const currentTime = getCurrentTimeAsString();
      setlogoContainerZIndexStateData(prevState => [...prevState, currentTime + "--" + props.logoContainerZIndexState]);
   }, [props.logoContainerZIndexState]);

   return (
      <div className="loading_screen_data_tracker">

         <div className="screen_loader_data_tracker_section">
            <div className="screen_loader_data_tracker_section_heading">
               logoLeftCoverStateData
            </div>
            {logoLeftCoverStateData.map((item, index)=>(<LoadingScreenOriginBarDataTrackerItem key={index} itemContent={index + "--" + item} />))}
         </div>

         <div className="screen_loader_data_tracker_section">
            <div className="screen_loader_data_tracker_section_heading">
               logoRightCoverStateData
            </div>
            {logoRightCoverStateData.map((item, index)=>(<LoadingScreenOriginBarDataTrackerItem key={index} itemContent={index + "--" + item} />))}
         </div>
         
         <div className="screen_loader_data_tracker_section">
            <div className="screen_loader_data_tracker_section_heading">
               logoContainerStateData
            </div>
            {logoContainerStateData.map((item, index)=>(<LoadingScreenOriginBarDataTrackerItem key={index} itemContent={index + "--" + item} />))}
         </div>
         
         <div className="screen_loader_data_tracker_section">
            <div className="screen_loader_data_tracker_section_heading">
               logoContainerZIndexStateData
            </div>
            {logoContainerZIndexStateData.map((item, index)=>(<LoadingScreenOriginBarDataTrackerItem key={index} itemContent={index + "--" + item} />))}
         </div>

      </div>
   );
};

function getCurrentTimeAsString(): string 
{
   const now = new Date();
   const hours = now.getHours().toString().padStart(2, '0'); // Pad with 0 if single digit
   const minutes = now.getMinutes().toString().padStart(2, '0');
   const seconds = now.getSeconds().toString().padStart(2, '0');
 
   return `${hours}:${minutes}:${seconds}`;
 }