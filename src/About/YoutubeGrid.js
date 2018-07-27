import React from 'react';
import {
    Segment, Header, Grid, Embed,} from 'semantic-ui-react'

const YoutubeGrid = () => (
<Segment>
    <Header> Woohoo AMV's </Header>
    <Grid relaxed columns={4}>
        <Grid.Column>
            <Embed aspectRatio='4:3' id='qBVjUJIXZ3o' placeholder='/images/image-16by9.png' source='youtube' iframe={{
                allowFullScreen: true,
                style: {
                    padding: 10,
                },
            }} />
        </Grid.Column>
        <Grid.Column>
            <Embed aspectRatio='4:3' id='EWFNR3MkIJE' placeholder='/images/image-16by9.png' source='youtube' iframe={{
                allowFullScreen: true,
                style: {
                    padding: 10,
                },
            }} />
        </Grid.Column>
        <Grid.Column>
            <Embed aspectRatio='4:3' id='J02g3Twvq9U' placeholder='/images/image-16by9.png' source='youtube' iframe={{
                allowFullScreen: true,
                style: {
                    padding: 10,
                },
            }} />
        </Grid.Column>
        <Grid.Column>
            <Embed aspectRatio='4:3' id='pwXZx36JT5I' placeholder='/images/image-16by9.png' source='youtube' iframe={{
                allowFullScreen: true,
                style: {
                    padding: 10,
                },
            }} />
        </Grid.Column>
    </Grid>
</Segment>
)
export default YoutubeGrid