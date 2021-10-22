import Box from "@material-ui/core/Box";
import { Grid, Paper } from "@material-ui/core";
import React from "react";

export default {
  title: "Layout/Examples",
  component: Grid,
};

export const MasterGrid = () => {
  return (
    <Box
      width={800}
      height={600}
      bgcolor="pink"
      paddingLeft={4}
      paddingRight={4}
      paddingTop={2}
    >
      <Paper elevation={2} style={{ height: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box bgcolor="lightblue" height={576}>
              col
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export const NestedGrid = () => {
  return (
    <Box
      width={800}
      height={600}
      bgcolor="pink"
      paddingLeft={0}
      paddingRight={4}
      paddingTop={2}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Paper elevation={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box height={576} bgcolor="orange">
                  sidebar
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper elevation={2}>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box bgcolor="lightblue" height={576}>
                  col
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
