import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Reveal,
} from 'semantic-ui-react'
import image1 from '../Elements/image1.jpg';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import Footer from './Footer';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const ResponsiveContainer = ({ children }) => (
  <div style={{
    backgroundColor: '#F9F9F9'
  }}>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Something something something
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              It's peanut butter jelly time
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <Reveal animated = 'rotate'>
          <Reveal.Content visible>
            <Image bordered rounded size='medium' src={image1} />
            </Reveal.Content>
            <Reveal.Content hidden>
            <p> Woohoo! </p>
            </Reveal.Content>
            </Reveal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              -_-
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              DX
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>Everyone</b> Whyyy
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </ResponsiveContainer>
)

export default  Home