import React from 'react';
import './LoadingScreenOriginBarDataTracker.css';
import LoadingScreenOriginBarDataTrackerItem from './LoadingScreenOriginBarDataTrackerItem'

export default function LoadingScreenOriginBarDataTracker(props: any): JSX.Element
{
   const initialTime = getCurrentTimeAsString();
   const componentInitialState = initialTime + "--" + "Empty Initial State";
   
   const [originBarHeightStateData, setoriginBarHeightStateData] = React.useState<string[]>([componentInitialState]);
   const [originBarHorizontalLocationStateData, setoriginBarHorizontalLocationStateData] = React.useState<string[]>([componentInitialState]);
   const [originBarRotationStateData, setoriginBarRotationStateData] = React.useState<string[]>([componentInitialState]);

   React.useEffect(()=>
   {
      const currentTime = getCurrentTimeAsString();
      setoriginBarHeightStateData(prevState => [...prevState, currentTime + "--" + props.originBarHeightState]);
   }, [props.originBarHeightState]);

   React.useEffect(()=>
   {
      const currentTime = getCurrentTimeAsString();
      setoriginBarHorizontalLocationStateData(prevState => [...prevState, currentTime + "--" + props.originBarHorizontalLocationState]);
   }, [props.originBarHorizontalLocationState]);

   React.useEffect(()=>
   {
      const currentTime = getCurrentTimeAsString();
      setoriginBarRotationStateData(prevState => [...prevState, currentTime + "--" + props.originBarRotationState]);
   }, [props.originBarRotationState]);

   return (
      <div className="loading_screen_data_tracker">

         <div className="screen_loader_data_tracker_section">
            <div className="screen_loader_data_tracker_section_heading">
               Origin Bar Height State Data
            </div>
            {originBarHeightStateData.map((item, index)=>(<LoadingScreenOriginBarDataTrackerItem key={index} itemContent={index + "--" + item} />))}
         </div>

         <div className="screen_loader_data_tracker_section">
            <div className="screen_loader_data_tracker_section_heading">
               Origin Bar Horizontal Location State Data
            </div>
            {originBarHorizontalLocationStateData.map((item, index)=>(<LoadingScreenOriginBarDataTrackerItem key={index} itemContent={index + "--" + item} />))}
         </div>
         
         <div className="screen_loader_data_tracker_section">
            <div className="screen_loader_data_tracker_section_heading">
               Origin Bar Rotation State Data
            </div>
            {originBarRotationStateData.map((item, index)=>(<LoadingScreenOriginBarDataTrackerItem key={index} itemContent={index + "--" + item} />))}
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