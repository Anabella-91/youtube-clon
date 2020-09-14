import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{display: 'column', alignItems: 'center', cursor:'pointer'}} onClick={() => onVideoSelect(video)}>
            <img style={{width: '90%', marginLeft: '5px'}} alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
            <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
            <Typography variant='caption'><b>Channel {video.snippet.channelTitle}</b></Typography>
            </Paper>
        </Grid>
    )
};
export default VideoItem;