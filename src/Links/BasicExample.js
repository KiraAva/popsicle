import PropTypes from 'prop-types'
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Responsive, Visibility, Button, Dropdown, Header } from 'semantic-ui-react';
import Home from '../components/Home';
import AboutPage from '../About/AboutPage';
import HomepageHeading from '../components/HomepageHeading';
import Life from '../About/Life';

class BasicExample extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        return (
            < Router >
                <div>
                    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                        <Visibility
                            once={false}
                            onBottomPassed={this.showFixedMenu}
                            onBottomPassedReverse={this.hideFixedMenu}
                        >
                            <Segment
                                inverted
                                textAlign='center'
                                style={{ minHeight: 700, padding: '1em 0em', backgroundColor: '#900C3F' }}
                                vertical>
                                <Menu fixed={fixed ? 'top' : null}
                                    inverted={!fixed}
                                    pointing={!fixed}
                                    secondary={!fixed}
                                    size='large'>
                                    <Menu.Item as='a'>
                                        <Link to="/">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/about">About</Link>
                                    </Menu.Item>
                                </Menu>
                                <HomepageHeading />
                            </Segment>
                        </Visibility>
                    </Responsive>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={AboutPage} />
                    {/* <Route path="/about/life" component={Life} /> */}
                </div>
            </Router >
        );

        // const Home2 = () => (
        //     <div>
        //         <Menu>
        //             <Menu.Item>Home</Menu.Item>
        //         </Menu>
        //     </div>
        // );

        // const About = () => (
        //     <div>
        //         <Menu>
        //             <Menu.Item>About</Menu.Item>
        //         </Menu>
        //     </div>
        // );
    }
}

export default BasicExample;