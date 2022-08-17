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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <h1 style={{textAlign: "center"}}>We are</h1>
            <h5 style={{textAlign: "center"}}>A diverse group of builders, operators, strategists, consultants, researchers with a love of all things startup, tech, and investing.</h5>
            {/*<DefaultCounterCard*/}
            {/*  count={"40"}*/}
            {/*  // suffix="+"*/}
            {/*  title="builders, operators, strategists, consultants, researchers with a love of all things startup, tech, and investing."*/}
            {/*  description="sdf buttons, to inputs, navbars, alerts or cards, you are covered"*/}
            {/*/>*/}
          </Grid>
          <Grid item xs={12} md={4}>
            <h1 style={{textAlign: "center"}}>Our mission</h1>
            <h5 style={{textAlign: "center"}}>Immerse ourselves in the venture ecosystem and building strong foundations to drive everlasting impact.</h5>
            {/*<DefaultCounterCard*/}
            {/*  count={"40"}*/}
            {/*  // suffix="+"*/}
            {/*  title="builders, operators, strategists, consultants, researchers with a love of all things startup, tech, and investing."*/}
            {/*  description="sdf buttons, to inputs, navbars, alerts or cards, you are covered"*/}
            {/*/>*/}
          </Grid>

          <Grid item xs={12} md={4}>
            <h1 style={{textAlign: "center"}}>Our Work</h1>
            <h5 style={{textAlign: "center"}}>Join hands with the brightest entrepreneurs of today and foster innovation in cutting-edge startups to solve the world’s hardest problems. </h5>
            {/*<DefaultCounterCard*/}
            {/*  count={"40"}*/}
            {/*  // suffix="+"*/}
            {/*  title="builders, operators, strategists, consultants, researchers with a love of all things startup, tech, and investing."*/}
            {/*  description="sdf buttons, to inputs, navbars, alerts or cards, you are covered"*/}
            {/*/>*/}
          </Grid>
          {/*<Grid item xs={12} md={4} display="flex">*/}
          {/*  <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />*/}
          {/*  <DefaultCounterCard*/}
          {/*    count={15}*/}
          {/*    suffix="+"*/}
          {/*    title="Design Blocks"*/}
          {/*    description="Mix the sections, change the colors and unleash your creativity"*/}
          {/*  />*/}
          {/*  <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} md={4}>*/}
          {/*  <DefaultCounterCard*/}
          {/*    count={4}*/}
          {/*    title="Pages"*/}
          {/*    description="Save 3-4 weeks of work when you use our pre-made pages for your website"*/}
          {/*  />*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
