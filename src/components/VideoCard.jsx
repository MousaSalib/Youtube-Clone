// import React from 'react';
// import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle } from '../utils/constants';
// import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

// const VideoCard = ({ video: { id: { videoId }, snippet} }) => {
//   return (
//     <Card>
//       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
//         <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: 358, height: 180 }}/>
//       </Link>
//       <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}}>
//         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
//           <Typography variant='subTitle1' fontWeight={'bold'} color={'#fff'}>
//             {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
//           </Typography>
//         </Link>
//         <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
//           <Typography variant='subTitle2' fontWeight={'bold'} color={'gray'}>
//             {snippet?.channelTitle || demoChannelTitle}
//           </Typography>
//         </Link>
//       </CardContent>
//     </Card>
//   )
// }

// export default VideoCard

import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard