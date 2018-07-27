import PropTypes from 'prop-types'
import React from 'react';
import {
    Button,
    Container,
    Header,
    Icon,
    Image,
    Segment,
    Responsive,
    AccordionTitle
  } from 'semantic-ui-react'
  import image1 from '../Elements/image1.jpg';

const HomepageHeading = ({ mobile }) => (


    <Container text>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
    <Segment inverted
            textAlign='center'
            style={{ minHeight: 200, padding: '0.5em 0em', backgroundColor: '#900C3F' }}
            vertical>
      <Header
        as='h1'
        color='pink'
        //need to make this text interchangeable between pages
        content="Wasssup"
        inverted
        style={{
          fontSize: mobile ? '2em' : '3em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '0.5em' : '1em',
        }}
      />
      <Image centered size='small' src={image1} />
      <Header
        as='h2'
        //need to make this text interchangable between pages
        content= "something something"
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1em',
          fontStyle: 'italic',
        }}
      />
      {/* <Button animated primary size='large'
      style={{
        color: 'pink',
        backgroundColor: 'violet',
        marginBottom: 0,
      }}>
      <Button.Content visible>More This Way</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
      </Button> */}
      </Segment>
      </Responsive>
    </Container>
  )

  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

  export default HomepageHeading;