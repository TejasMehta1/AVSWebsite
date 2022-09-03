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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQExcOQDjZkRAA/profile-displayphoto-shrink_800_800/0/1643172767667?e=1666828800&v=beta&t=TWFexHYN-6SL5v_yEela72v4SOgKJvTLDV-aLc05MtA"}
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
                image={team1}
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
                image={"https://media-exp1.licdn.com/dms/image/C4E03AQGJRSJWOCZo2w/profile-displayphoto-shrink_800_800/0/1641230041159?e=1666828800&v=beta&t=hYoy-l-DgD93A-u9vCDEEDMQHZ5ecpoWlP-WZjsTxRk"}
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
                image={"https://media-exp1.licdn.com/dms/image/C5603AQGIPvm3pC6sxQ/profile-displayphoto-shrink_800_800/0/1659384084819?e=1666828800&v=beta&t=8bipUtHgCYsKe9C3UYMpER-emcb_CzNPWJZUdvEeFZg"}
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
                  image={"https://d1fdloi71mui9q.cloudfront.net/tfyCNVekSpKPZpcGmf4p_0chy36B2v5E28o3X"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQF5RjPHT1_qGg/profile-displayphoto-shrink_800_800/0/1642298137500?e=1666828800&v=beta&t=bgMM-dgexEnPcDntz5tUCvgFPXAJ4yxTMjuErysCHrQ"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQGqFoftcd5btg/profile-displayphoto-shrink_800_800/0/1650937921715?e=1666828800&v=beta&t=UyAo75oVT0FyqRyZaKFr_t3WWv9qDZoNj6PM2RM1JB4"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQEprHUI36i2IA/profile-displayphoto-shrink_800_800/0/1635440576356?e=1666828800&v=beta&t=SC69b2Auth6KEByooOTtzIfMsZrBo8AnR6AQJytnQT4"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQEILIlqrFMwJw/profile-displayphoto-shrink_800_800/0/1660635418595?e=1666828800&v=beta&t=X-2E4v-YN2uxnoZJdTDgg5Uw4gDzm-u13WH5HwfiZ48"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQGCTUv7xZDpvA/profile-displayphoto-shrink_800_800/0/1620179779251?e=1666828800&v=beta&t=D_64Ku_RUqgaR0yza9GWdOU0XW36_WIUqeVg6dxt7Ds"}
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
                  image={"https://ca.slack-edge.com/T01KM7WQ0GJ-U032ZL6JY3F-fd799b9d3483-512"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQEnbSfphqf4QQ/profile-displayphoto-shrink_800_800/0/1656734853162?e=1667433600&v=beta&t=BAWTXbM1SJCmniCUl5pyPCAoTojThm4HnlSz1PRtlrM"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQF-iI_9ep4mZg/profile-displayphoto-shrink_800_800/0/1606871818685?e=1667433600&v=beta&t=Y7hsgUM8ih46yRR-oBwiLStK8Ux4J33hiWYJRedTZ-Q"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQFbtdt9OScorA/profile-displayphoto-shrink_800_800/0/1637343399776?e=1667433600&v=beta&t=qjj3QSEmVYsMDqeDGHZpXsJv9_dn1mv58cXfJiT8ilw"}
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
                  image={"https://ca.slack-edge.com/T01KM7WQ0GJ-U033F5ZNTG9-f34ba84046d1-512"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQEzkJ22pgY5Dg/profile-displayphoto-shrink_800_800/0/1659541288717?e=1667433600&v=beta&t=b7MXIZF2VIW897s1CVoe4GzJ5CruzAl7KzzAWFRRVy8"}
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
                  image={"https://ca.slack-edge.com/T01KM7WQ0GJ-U0332HPQLD9-g37c27301922-512"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQEYvKYXnxnQ7w/profile-displayphoto-shrink_800_800/0/1652833400897?e=1667433600&v=beta&t=IwWdE0D3ffi7QJWYH4Z0JDZj_goVHjbyLCdf1pEL--c"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQF4AS2ODQA2zw/profile-displayphoto-shrink_800_800/0/1599613846469?e=1667433600&v=beta&t=pDn3mqiSsPe4tmsVFUeeOVTBo0_WzMv-IG65tZ1qY9c"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQHVLUSzZ9VVkw/profile-displayphoto-shrink_800_800/0/1560360963957?e=1667433600&v=beta&t=CuSy2NNRjWRCNEY5uNz7ixOc6-gHmHDFsFQRNojISWg"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQGED46M8y1Vhw/profile-displayphoto-shrink_800_800/0/1648422775236?e=1667433600&v=beta&t=kn_KKpIxEMbU0JwidCT6nBhfAxQn6x0RctZ6PiuF8AI"}
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
                  image={"https://ca.slack-edge.com/T01KM7WQ0GJ-U01S480N6HJ-5cc8a7bc8062-512"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C4E03AQHGh5Sa7MrTZQ/profile-displayphoto-shrink_800_800/0/1634911012228?e=1667433600&v=beta&t=C7sxus648cyk-VMyo1CtnXZE43cU4QosXoKSvmKMCTc"}
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
                  image={"https://media-exp1.licdn.com/dms/image/C5603AQFe2f4e7Q6u9A/profile-displayphoto-shrink_800_800/0/1626781034503?e=1667433600&v=beta&t=Gez94jl8f9Ap679KPsOVpIBA90MkkTqnb7da2n548qA"}
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
