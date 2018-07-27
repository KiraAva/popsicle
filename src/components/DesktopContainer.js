import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import HomepageHeading from './HomepageHeading';



class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state


    return (
      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          {children}
        </Responsive>
        </div>
        )
      }
    }
    
DesktopContainer.propTypes = {
          children: PropTypes.node,
      }
      
export default DesktopContainer;