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
import CenteredFooter from "examples/Footers/CenteredFooter";
import SimpleFooter from "examples/Footers/SimpleFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/austin-night.jpeg";
import logo from "assets/AVS-LOGO.png"
import groupPic1 from "assets/images/groupPic1.png"

import "all.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Presentation() {
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
                        Builders at heart & change-makers of tomorrow
                    </MKTypography>
                    {/*<MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>*/}
                    {/*    create account*/}
                    {/*</MKButton>*/}
                    <MKTypography variant="h6" color="white" mt={8} mb={1}>
                        Find us on
                    </MKTypography>
                    <MKBox display="flex" justifyContent="center" alignItems="center">
                        <MKTypography component="a" variant="body1" color="white" href="https://www.linkedin.com/company/austin-venture-strategy/" mr={3} className={"findus"}>
                            <i className="fab fa-linkedin" />
                        </MKTypography>
                        <MKTypography component="a" variant="body1" color="white" href="https://www.instagram.com/ut.avs/" mr={3} className={"findus"}>
                            <i className="fab fa-instagram" />
                        </MKTypography>
                        {/*<MKTypography component="a" variant="body1" color="white" href="https://twitter.com" mr={3} className={"findus"}>*/}
                        {/*    <i className="fab fa-twitter" />*/}
                        {/*</MKTypography>*/}

                    </MKBox>
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
        <br/>
        <br/>
        <Counters />
        <img style={{width: "70%", marginLeft: "auto", marginRight: "auto"}} src={groupPic1} />
        {/*<Information />*/}
        {/*<DesignBlocks />*/}
        {/*<Pages />*/}
        {/*<Container sx={{ mt: 6 }}>*/}
        {/*  <BuiltByDevelopers />*/}
        {/*</Container>*/}
        {/*<Container>*/}
        {/*  <Grid container spacing={3}>*/}
        {/*    <Grid item xs={12} lg={4}>*/}
        {/*      <FilledInfoCard*/}
        {/*        variant="gradient"*/}
        {/*        color="info"*/}
        {/*        icon="flag"*/}
        {/*        title="Getting Started"*/}
        {/*        description="Check the possible ways of working with our product and the necessary files for building your own project."*/}
        {/*        action={{*/}
        {/*          type: "external",*/}
        {/*          route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",*/}
        {/*          label: "Let's start",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} lg={4}>*/}
        {/*      <FilledInfoCard*/}
        {/*        color="info"*/}
        {/*        icon="precision_manufacturing"*/}
        {/*        title="Plugins"*/}
        {/*        description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."*/}
        {/*        action={{*/}
        {/*          type: "external",*/}
        {/*          route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",*/}
        {/*          label: "Read more",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} lg={4}>*/}
        {/*      <FilledInfoCard*/}
        {/*        color="info"*/}
        {/*        icon="apps"*/}
        {/*        title="Components"*/}
        {/*        description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."*/}
        {/*        action={{*/}
        {/*          type: "external",*/}
        {/*          route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",*/}
        {/*          label: "Read more",*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</Container>*/}
        {/*<Testimonials />*/}
        {/*<Download />*/}
        {/*<MKBox pt={18} pb={6}>*/}
        {/*  <Container>*/}
        {/*    <Grid container spacing={3}>*/}
        {/*      <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>*/}
        {/*        <MKTypography variant="h4" fontWeight="bold" mb={0.5}>*/}
        {/*          Thank you for your support!*/}
        {/*        </MKTypography>*/}
        {/*        <MKTypography variant="body1" color="text">*/}
        {/*          We deliver the best web products*/}
        {/*        </MKTypography>*/}
        {/*      </Grid>*/}
        {/*      <Grid*/}
        {/*        item*/}
        {/*        xs={12}*/}
        {/*        lg={5}*/}
        {/*        my={{ xs: 5, lg: "auto" }}*/}
        {/*        mr={{ xs: 0, lg: "auto" }}*/}
        {/*        sx={{ textAlign: { xs: "center", lg: "right" } }}*/}
        {/*      >*/}
                {/*<MKSocialButton*/}
                {/*  component="a"*/}
                {/*  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"*/}
                {/*  target="_blank"*/}
                {/*  color="twitter"*/}
                {/*  sx={{ mr: 1 }}*/}
                {/*>*/}
                {/*  <i className="fab fa-twitter" />*/}
                {/*  &nbsp;Tweet*/}
                {/*</MKSocialButton>*/}
                {/*<MKSocialButton*/}
                {/*  component="a"*/}
                {/*  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"*/}
                {/*  target="_blank"*/}
                {/*  color="facebook"*/}
                {/*  sx={{ mr: 1 }}*/}
                {/*>*/}
                {/*  <i className="fab fa-facebook" />*/}
                {/*  &nbsp;Share*/}
                {/*</MKSocialButton>*/}
                {/*<MKSocialButton*/}
                {/*//   component="a"*/}
                {/*//   href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"*/}
                {/*//   target="_blank"*/}
                {/*//   color="pinterest"*/}
                {/*// >*/}
                {/*//   <i className="fab fa-pinterest" />*/}
                {/*//   &nbsp;Pin it*/}
                {/*// </MKSocialButton>*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Container>*/}
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
                            { icon: <LinkedInIcon fontSize="small" />, link: "https://www.linkedin.com/company/austin-venture-strategy" },
                            // {
                            //     icon: <TwitterIcon fontSize="small" />,
                            //     link: "https://twitter.com/creativetim",
                            // },
                            {
                                icon: <InstagramIcon fontSize="small" />,
                                link: "https://www.instagram.com/ut.avs/",
                            }
                        ]}
          light= {true}
         />
      </MKBox>
    </>
  );
}

export default Presentation;
