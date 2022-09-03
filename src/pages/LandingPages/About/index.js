/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import logos from "assets/images/AVSCompanyOutcomes.png"
// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/austin-night.jpeg";
import logo from "assets/AVS-LOGO.png"

import "all.css"

import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import CenteredFooter from "examples/Footers/CenteredFooter";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function About() {


        const [dropdown, setDropdown] = useState(null);
        const [dropup, setDropup] = useState(null);

        const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
        const closeDropdown = () => setDropdown(null);

        const openDropup = ({ currentTarget }) => setDropup(currentTarget);
        const closeDropup = () => setDropup(null);


    return (
        <>
            <DefaultNavbar
                brand={"Austin Venture Strategy"}
                routes={routes}
                action={{
                    type: "external",
                    route: "https://docs.google.com/forms/d/e/1FAIpQLScNJYKUev5XDJihvW0s-xmHWip1J5MxJcTL28DCBys7xrgHUg/viewform",
                    label: "Apply Now",
                    color: "info",
                }}
                sticky
            />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            <img style={{width: "4em"}} src={logo}/>
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                            About Austin Venture Strategy
                        </MKTypography>

                    </Grid>
                </Container>
            </MKBox>
            {/*<MKBox*/}
            {/*  minHeight="75vh"*/}
            {/*  width="100%"*/}
            {/*  sx={{*/}
            {/*    backgroundImage: `url(${bgImage})`,*/}
            {/*    backgroundSize: "cover",*/}
            {/*    backgroundPosition: "top",*/}
            {/*    display: "grid",*/}
            {/*    placeItems: "center",*/}
            {/*  }}*/}
            {/*>*/}
            {/*<Container>*/}
            {/*  <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">*/}
            {/*    <MKTypography*/}
            {/*      variant="h1"*/}
            {/*      color="white"*/}
            {/*      mt={-6}*/}
            {/*      mb={1}*/}
            {/*      sx={({ breakpoints, typography: { size } }) => ({*/}
            {/*        [breakpoints.down("md")]: {*/}
            {/*          fontSize: size["3xl"],*/}
            {/*        },*/}
            {/*      })}*/}
            {/*    >*/}
            {/*        <img style={{width: "500px"}} src={logo}/>*/}

            {/*    </MKTypography>*/}
            {/*    <MKTypography*/}
            {/*      variant="body1"*/}
            {/*      color="white"*/}
            {/*      textAlign="center"*/}
            {/*      px={{ xs: 6, lg: 12 }}*/}
            {/*      mt={1}*/}
            {/*    >*/}
            {/*        Builders at heart and change-makers of tomorrow*/}
            {/*        /!*Austin Venture Strategy is composed of a team of UT Austin students from a variety of majors and backgrounds with a passion for helping build the entrepreneurial ecosystem. We’re builders, operators, strategists, consultants, researchers, and much more with a love of all things startup, tech, and investing. We tackle all kinds of projects across the breadth of a startup with the goal of giving students the hands-on operating experience needed to become superb founders, operators, innovators, and investors. We believe that venture drives the future, and we’re here to do just that.*!/*/}
            {/*    </MKTypography>*/}



            {/*      /!*</MKTypography>*!/*/}
            {/*  </Grid>*/}
            {/*</Container>*/}
            {/*</MKBox>*/}
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >


                {/*<Counters />*/}
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        flexDirection="column"
                        alignItems="center"
                        sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
                    >

                        <MKTypography variant="h2" fontWeight="bold">
                            Future Leaders
                        </MKTypography>
                        <MKTypography variant="body1" color="text">
                            AVS members strive to creating an equitable and sustainable venture ecosystem. Check out some companies our members have made waves in!
                        </MKTypography>

                        <img style={{width: "100%"}} src={logos}/>



                    </Grid>
                </Container>

                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        flexDirection="column"
                        alignItems="left"
                        sx={{ textAlign: "left", my: 6, mx: "auto", px: 0.75 }}
                    >


                        <MKTypography variant="h2" fontWeight="bold">
                            FAQ
                        </MKTypography>
                        <br/>

                        {/*<MKButton variant="gradient" color="info" onClick={openDropdown}>*/}
                        {/*    Dropdown <Icon >expand_more</Icon>*/}
                        {/*</MKButton>*/}
                        {/*<Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>*/}

                        {/*    <MenuItem>*/}

                        {/*    </MenuItem>*/}
                        {/*    /!*<MenuItem onClick={closeDropdown}>Action</MenuItem>*!/*/}
                        {/*    /!*<MenuItem onClick={closeDropdown}>Another action</MenuItem>*!/*/}
                        {/*    /!*<MenuItem onClick={closeDropdown}>Something else here</MenuItem>*!/*/}
                        {/*</Menu>*/}

                        <MKTypography variant="body1" color="text">
                            <b>What exactly does AVS do?</b>
                        </MKTypography>

                            <MKTypography variant="body1" color="text">
                                AVS helps startups tackle specific strategic and product problems each semester by having a team of students work with the startup in a variety of functions from growth marketing and user research to product design and API development. AVS also seeks to help its members pursue opportunities in venture capital, startup tech, and become founders in the future.
                            </MKTypography>

                        <br/>
                        <MKTypography variant="body1" color="text">
                            <b>What is the expected time commitment to AVS?</b>
                        </MKTypography>

                        <MKTypography variant="body1" color="text">
                            Our weekly general meetings last for an hour and focus on learning the ins and outs of venture capital and delivering value-add to startups from both an investor and operator perspective. Project team meetings are expected to take another hour each week. Deliverables are expected to be worked on each week during the course of a project, and some time will be spent during the semester working on your own content (investment thesis, market deep dives, etc.). In total, the weekly commitment is expected to range from ~8-10 hours.
                        </MKTypography>

                        <br/>
                        <MKTypography variant="body1" color="text">
                            <b>Who can join AVS</b>
                        </MKTypography>

                        <MKTypography variant="body1" color="text">
                            Anyone at UT Austin can apply; we have no restrictions on major, year, or prior experience. We encourage students from all backgrounds to apply; diverse experience create stronger teams!

                        </MKTypography>


                        <br/>
                        <MKTypography variant="body1" color="text">
                            <b>Can AVS help me become a venture capitalist?</b>
                        </MKTypography>

                        <MKTypography variant="body1" color="text">

                            We strive to help our members achieve careers in venture capital and as startup operators; we hope you may go on to become founders yourselves! We can help connect you with opportunities, mentors, and recruiting resources as well as help you with interview preparation and the recruiting process, but there is no substitute for experience at a startup; our philosophy is that the best investors have startup experience under their belts. The goal of AVS is to give you this foundational experience working at startups so you can think like an operator.
                        </MKTypography>


                        <br/>
                        <MKTypography variant="body1" color="text">
                            <b>How can my startup get help from AVS?</b>
                        </MKTypography>

                        <MKTypography variant="body1" color="text">

                            Shoot us an <a href={"mailto:austinventurestrategy@gmail.com"}>email</a>    </MKTypography>



                    </Grid>
                </Container>

                {/*<Information />*/}
                {/*<DesignBlocks />*/}

                {/*<Pages />*/}
                {/*<Container sx={{ mt: 6 }}>*/}
                {/*    <BuiltByDevelopers />*/}
                {/*</Container>*/}
                {/*<Container>*/}
                {/*    <Grid container spacing={3}>*/}
                {/*        <Grid item xs={12} lg={4}>*/}
                {/*            <FilledInfoCard*/}
                {/*                variant="gradient"*/}
                {/*                color="info"*/}
                {/*                icon="flag"*/}
                {/*                title="Getting Started"*/}
                {/*                description="Check the possible ways of working with our product and the necessary files for building your own project."*/}
                {/*                action={{*/}
                {/*                    type: "external",*/}
                {/*                    route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",*/}
                {/*                    label: "Let's start",*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} lg={4}>*/}
                {/*            <FilledInfoCard*/}
                {/*                color="info"*/}
                {/*                icon="precision_manufacturing"*/}
                {/*                title="Plugins"*/}
                {/*                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."*/}
                {/*                action={{*/}
                {/*                    type: "external",*/}
                {/*                    route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",*/}
                {/*                    label: "Read more",*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} lg={4}>*/}
                {/*            <FilledInfoCard*/}
                {/*                color="info"*/}
                {/*                icon="apps"*/}
                {/*                title="Components"*/}
                {/*                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."*/}
                {/*                action={{*/}
                {/*                    type: "external",*/}
                {/*                    route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",*/}
                {/*                    label: "Read more",*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Container>*/}
                {/*<Testimonials />*/}
                {/*<Download />*/}
                {/*<MKBox pt={18} pb={6}>*/}
                {/*    <Container>*/}
                {/*        <Grid container spacing={3}>*/}
                {/*            <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>*/}
                {/*                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>*/}
                {/*                    Thank you for your support!*/}
                {/*                </MKTypography>*/}
                {/*                <MKTypography variant="body1" color="text">*/}
                {/*                    We deliver the best web products*/}
                {/*                </MKTypography>*/}
                {/*            </Grid>*/}
                {/*            <Grid*/}
                {/*                item*/}
                {/*                xs={12}*/}
                {/*                lg={5}*/}
                {/*                my={{ xs: 5, lg: "auto" }}*/}
                {/*                mr={{ xs: 0, lg: "auto" }}*/}
                {/*                sx={{ textAlign: { xs: "center", lg: "right" } }}*/}
                {/*            >*/}
                {/*                <MKSocialButton*/}
                {/*                    component="a"*/}
                {/*                    href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"*/}
                {/*                    target="_blank"*/}
                {/*                    color="twitter"*/}
                {/*                    sx={{ mr: 1 }}*/}
                {/*                >*/}
                {/*                    <i className="fab fa-twitter" />*/}
                {/*                    &nbsp;Tweet*/}
                {/*                </MKSocialButton>*/}
                {/*                <MKSocialButton*/}
                {/*                    component="a"*/}
                {/*                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"*/}
                {/*                    target="_blank"*/}
                {/*                    color="facebook"*/}
                {/*                    sx={{ mr: 1 }}*/}
                {/*                >*/}
                {/*                    <i className="fab fa-facebook" />*/}
                {/*                    &nbsp;Share*/}
                {/*                </MKSocialButton>*/}
                {/*                <MKSocialButton*/}
                {/*                    component="a"*/}
                {/*                    href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"*/}
                {/*                    target="_blank"*/}
                {/*                    color="pinterest"*/}
                {/*                >*/}
                {/*                    <i className="fab fa-pinterest" />*/}
                {/*                    &nbsp;Pin it*/}
                {/*                </MKSocialButton>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </Container>*/}
                {/*</MKBox>*/}
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <CenteredFooter company={{href: "https://austinventurestrategy.com", name: "Austin Venture Strategy"}}

                                links={[
                                    // { href: "https://www.creative-tim.com/", name: "Company" },
                                    // { href: "https://www.creative-tim.com/presentation", name: "About Us" },
                                    // { href: "https://www.creative-tim.com/presentation", name: "Team" },
                                    // { href: "https://www.creative-tim.com/templates/react", name: "Products" },
                                    // { href: "https://www.creative-tim.com/blog", name: "Blog" },
                                    // { href: "https://www.creative-tim.com/license", name: "License" },
                                ]}
                                socials={ [
                                    { icon: <LinkedInIcon fontSize="small" />, link: "https://www.facebook.com/CreativeTim/" },
                                    {
                                        icon: <TwitterIcon fontSize="small" />,
                                        link: "https://twitter.com/creativetim",
                                    },
                                    {
                                        icon: <InstagramIcon fontSize="small" />,
                                        link: "https://www.instagram.com/creativetimofficial/",
                                    }
                                ]}
                                light= {true}
                />>
            </MKBox>
        </>
    );
}

export default About;
