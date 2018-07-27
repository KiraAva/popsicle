import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Menu,
  Segment,
  Responsive,
  Icon,
  Visibility,
  Embed
} from 'semantic-ui-react'

import mobile from '../components/HomepageHeading';
import YoutubeGrid from './YoutubeGrid';
import Footer from '../components/Footer';


class AboutPage extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state


    return (
      <div>
        {/* <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em', backgroundColor: '#900C3F' }}
            vertical>
            <Header
              as='h1'
              color='pink'
              content='About'
              inverted
              style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
              }}
            />
            <Header
              as='h2'
              content='this is the about page'
              inverted
              style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
                marginBottom: 0,
                fontStyle: 'italic',
              }}
            />
          </Segment>
          {children}
        </Responsive> */}
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text style={{ marginTop: '1em' }}>
            <Header as='h1' textAlign='center'>A Little Bit of Info</Header>
            <p> Even more text </p>
            <p> Alllllll the text </p>
            <p> Nothing really to put here </p>
            <p> Gude gudetama </p>
            <Icon name='beer' />
            <Icon name='coffee' />
            <Icon name='birthday cake' />

          </Container>
        </Segment>

        <YoutubeGrid />
        <Footer />

      </div>
    )
  }
}

AboutPage.propTypes = {
  children: PropTypes.node,
}


export default AboutPage;