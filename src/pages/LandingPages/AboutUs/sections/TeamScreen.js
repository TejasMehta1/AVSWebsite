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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/TejasMehta.jpeg";


function TeamScreen() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Our Members
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Tejas Mehta"
                position={{ color: "info", label: "Product" }}
                linkedin={"https://www.linkedin.com/in/tejasmehta14/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={"https://media-exp1.licdn.com/dms/image/C5603AQExcOQDjZkRAA/profile-displayphoto-shrink_800_800/0/1643172767667?e=1666828800&v=beta&t=TWFexHYN-6SL5v_yEela72v4SOgKJvTLDV-aLc05MtA"}
                name="Mihiro Suzuki"
                position={{ color: "info", label: "Internal" }}
                linkedin={"https://www.linkedin.com/in/mihirosuzuki/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={"https://media-exp1.licdn.com/dms/image/C4E03AQGJRSJWOCZo2w/profile-displayphoto-shrink_800_800/0/1641230041159?e=1666828800&v=beta&t=hYoy-l-DgD93A-u9vCDEEDMQHZ5ecpoWlP-WZjsTxRk"}
                name="Surya Kaza"
                position={{ color: "info", label: "External" }}
                linkedin={"https://www.linkedin.com/in/suryakaza/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={"https://media-exp1.licdn.com/dms/image/C5603AQGIPvm3pC6sxQ/profile-displayphoto-shrink_800_800/0/1659384084819?e=1666828800&v=beta&t=8bipUtHgCYsKe9C3UYMpER-emcb_CzNPWJZUdvEeFZg"}
                name="Tarun Bobbili"
                position={{ color: "info", label: "Marketing" }}
                linkedin={"https://www.linkedin.com/in/tarunbobbili/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={"https://d1fdloi71mui9q.cloudfront.net/tfyCNVekSpKPZpcGmf4p_0chy36B2v5E28o3X"}
                  name="Andrew Abraham"
                  position={{ color: "info", label: "Social" }}
                  linkedin={"https://www.linkedin.com/in/andrewabraham17/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQF5RjPHT1_qGg/profile-displayphoto-shrink_800_800/0/1642298137500?e=1666828800&v=beta&t=bgMM-dgexEnPcDntz5tUCvgFPXAJ4yxTMjuErysCHrQ"}
                  name="Izcan O Ortiz"
                  position={{ color: "info", label: "Growth" }}
                  linkedin={"https://www.linkedin.com/in/izcan-ordaz-9219b5183/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQGqFoftcd5btg/profile-displayphoto-shrink_800_800/0/1650937921715?e=1666828800&v=beta&t=UyAo75oVT0FyqRyZaKFr_t3WWv9qDZoNj6PM2RM1JB4"}
                  name="Jose Herreria"
                  position={{ color: "info", label: "Growth" }}
                  linkedin={"https://www.linkedin.com/in/joseherreria/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQEprHUI36i2IA/profile-displayphoto-shrink_800_800/0/1635440576356?e=1666828800&v=beta&t=SC69b2Auth6KEByooOTtzIfMsZrBo8AnR6AQJytnQT4"}
                  name="Adit Pareek"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/aditpareek/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQEILIlqrFMwJw/profile-displayphoto-shrink_800_800/0/1660635418595?e=1666828800&v=beta&t=X-2E4v-YN2uxnoZJdTDgg5Uw4gDzm-u13WH5HwfiZ48"}
                  name="Neal Davar"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/nealdavar/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQGCTUv7xZDpvA/profile-displayphoto-shrink_800_800/0/1620179779251?e=1666828800&v=beta&t=D_64Ku_RUqgaR0yza9GWdOU0XW36_WIUqeVg6dxt7Ds"}
                  name="Mehar Poreddy"
                  position={{ color: "info", label: "Thesis" }}
                  linkedin={"https://www.linkedin.com/in/meharporeddy/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TeamScreen;
