import './LoadingScreenOriginBarDataTrackerItem.css';

export default function LoadingScreenOriginBarDataTrackerItem(props:any):JSX.Element
{
   return (
      <div className='loading_screen_origin_bar_data_tracker_item'>
         {props.itemContent}
      </div>
   );
}
