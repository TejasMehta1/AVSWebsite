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
import TejasMehta from "assets/images/TejasMehta.jpeg";
import MihiroSuzuki from "assets/images/MihiroSuzuki.jpeg";
import SuryaKaza from "assets/images/SuryaKaza.jpeg";
import TarunBobbili from "assets/images/TarunBobbili.jpeg";
import AndrewAbraham from "assets/images/AndrewAbraham.jpeg";
import IzcanOrtiz from "assets/images/IzcanOrtiz.jpeg";
import JoseHerreria from "assets/images/JoseHerreria.jpeg";
import AditPareek from "assets/images/AditPareek.jpeg";
import NealDavar from "assets/images/NealDavar.jpeg";
import MeharPoreddy from "assets/images/MeharPoreddy.jpeg";
import AarushiKhandelwal from "assets/images/AarushiKhandelwal.jpeg";
import AkhilThomas from "assets/images/AkhilThomas.jpeg";
import BenjaminWang from "assets/images/BenjaminWang.jpeg";
import FaizaRahman from "assets/images/FaizaRahman.jpeg";
import JakeDring from "assets/images/JakeDring.jpeg";
import JaySuresh from "assets/images/JaySuresh.jpeg";
import KatherineOspina from "assets/images/KatherineOspina.jpeg";
import KevinChen from "assets/images/KevinChen.jpeg";
import PatrickInsull from "assets/images/PatrickInsull.jpeg";
import RayanTejani from "assets/images/RayanTejani.jpeg";
import RishiVenkat from "assets/images/RishiVenkat.jpeg";
import RushilChander from "assets/images/RushilChander.jpeg";
import TrishaAggarwal from "assets/images/TrishaAggarwal.jpeg";
import VedantTrivedi from "assets/images/VedantTrivedi.jpeg";


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
            <MKTypography variant="h2" color="white">
              Our Members
            </MKTypography>
            <br/>
            <MKTypography variant="h3" color="white">
              Officers
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                  image={MihiroSuzuki}
                  name="Mihiro Suzuki"
                  position={{ color: "info", label: "President" }}
                  linkedin={"https://www.linkedin.com/in/mihirosuzuki/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={TejasMehta}
                name="Tejas Mehta"
                position={{ color: "info", label: "Product VP" }}
                linkedin={"https://www.linkedin.com/in/tejasmehta14/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={SuryaKaza}
                name="Surya Kaza"
                position={{ color: "info", label: "External VP" }}
                linkedin={"https://www.linkedin.com/in/suryakaza/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={TarunBobbili}
                name="Tarun Bobbili"
                position={{ color: "info", label: "Marketing VP" }}
                linkedin={"https://www.linkedin.com/in/tarunbobbili/"}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={AndrewAbraham}
                  name="Andrew Abraham"
                  position={{ color: "info", label: "Social VP" }}
                  linkedin={"https://www.linkedin.com/in/andrewabraham17/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={IzcanOrtiz}
                  name="Izcan O Ortiz"
                  position={{ color: "info", label: "Growth VP" }}
                  linkedin={"https://www.linkedin.com/in/izcan-ordaz-9219b5183/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={JoseHerreria}
                  name="Jose Herreria"
                  position={{ color: "info", label: "Growth VP" }}
                  linkedin={"https://www.linkedin.com/in/joseherreria/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={AditPareek}
                  name="Adit Pareek"
                  position={{ color: "info", label: "Product VP" }}
                  linkedin={"https://www.linkedin.com/in/aditpareek/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={NealDavar}
                  name="Neal Davar"
                  position={{ color: "info", label: "Product VP" }}
                  linkedin={"https://www.linkedin.com/in/nealdavar/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={MeharPoreddy}
                  name="Mehar Poreddy"
                  position={{ color: "info", label: "Thesis VP" }}
                  linkedin={"https://www.linkedin.com/in/meharporeddy/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>


          <Grid item xs={24} lg={12}>
          <MKTypography style={{marginBottom: "15px", marginTop: "20px"}} variant="h3" color="white">
            Members
          </MKTypography>
          </Grid>



          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={AarushiKhandelwal}
                  name="Aarushi Khandelwal"
                  position={{ color: "info", label: "Growth" }}
                  linkedin={"https://www.linkedin.com/in/khandelwalaarushi/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={AkhilThomas}
                  name="Akhil Thomas"
                  position={{ color: "info", label: "Growth" }}
                  linkedin={"https://www.linkedin.com/in/akhil-thomas-43b7291a5/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={BenjaminWang}
                  name="Benjamin Wang"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/benywang/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={FaizaRahman}
                  name="Faiza Rahman"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/faiza-rahman-a7998a12a/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={JakeDring}
                  name="Jake Dring"
                  position={{ color: "info", label: "Growth" }}
                  linkedin={"https://www.linkedin.com/in/jake-dring/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={JaySuresh}
                  name="Jay Suresh"
                  position={{ color: "info", label: "Growth" }}
                  linkedin={"https://www.linkedin.com/in/jay-suresh-39750016b/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={KatherineOspina}
                  name="Katherine Ospina"
                  position={{ color: "info", label: "Growth" }}
                  linkedin={"https://www.linkedin.com/in/katherineospina/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>


          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={KevinChen}
                  name="Kevin Chen"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/kevin-chen-630a881b9/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={PatrickInsull}
                  name="Patrick Insull"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/patrick-insull/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={RayanTejani}
                  name="Rayan Tejani"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/rayantejani/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={RishiVenkat}
                  name="Rishi Venkat"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/rishi-venkat/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={RushilChander}
                  name="Rushil Chander"
                  position={{ color: "info", label: "Growth" }}
                  linkedin={"https://www.linkedin.com/in/rushilchander/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={TrishaAggarwal}
                  name="Trisha Aggarwal"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/trisha-aggarwal/"}
                  // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                  image={VedantTrivedi}
                  name="Vedant Trivedi"
                  position={{ color: "info", label: "Product" }}
                  linkedin={"https://www.linkedin.com/in/vedant-trivedi-b470aa218/"}
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
