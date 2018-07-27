import React from 'react'
import { Segment, Container, Responsive, Header } from 'semantic-ui-react';
import ResponsiveContainer from '../components/Home';

const Life = () => (
    <ResponsiveContainer>
        <Segment>
            <Header as='h3' style={{ fontSize: '2em' }}>
                Something something something
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                Wooohooooooo
            </p>
        </Segment>
    </ResponsiveContainer>
)

export default Life