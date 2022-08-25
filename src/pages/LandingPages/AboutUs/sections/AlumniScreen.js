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


function AlumniScreen() {
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
              Our Alumni
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={"https://media-exp1.licdn.com/dms/image/C5603AQHAkbkzcQU8gg/profile-displayphoto-shrink_800_800/0/1601611329690?e=1666828800&v=beta&t=2qxXb45cnNVk-dk-BGa88bPTQ92ncwF0-LrKoXdQ4Ik"}
                name="Amil Naik"
                position={{ color: "info", label: "Operations Associate @ Wheel" }}
                linkedin={"https://www.linkedin.com/in/amilnaik/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={"https://media-exp1.licdn.com/dms/image/C4E03AQGwn-Pvgtm7gw/profile-displayphoto-shrink_800_800/0/1632498525515?e=1666828800&v=beta&t=Orzo359PxJqFaSjTkIrlN6UujBxEafnWECtsAn6S9V4"}
                name="Sanika Bhave"
                position={{ color: "info", label: "VC @ Capital Factory" }}
                linkedin={"https://www.linkedin.com/in/sanikabhave/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={"https://media-exp1.licdn.com/dms/image/C4E03AQEdk4EtIXNbag/profile-displayphoto-shrink_800_800/0/1649796965268?e=1666828800&v=beta&t=6mAdx-Bw8ldTcR7Q9lzLLTh46GSwC_bhfVMtPC3ul-Q"}
                name="Naman Sharma"
                position={{ color: "info", label: "Venture Architect at BCG Digital Ventures" }}
                linkedin={"https://www.linkedin.com/in/namansharma1/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

        </Grid>
      </Container>
    </MKBox>
  );
}

export default AlumniScreen;
