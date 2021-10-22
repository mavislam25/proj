import React from 'react'
import { PageNavigationContainer } from "../../components";
import { Badge, Breadcrumbs, Link, Typography, Box,makeStyles } from "@material-ui/core";
import { BellIcon } from "../../components/Icons/MainIcons";
import clsx from "clsx";
import './index.css'

const useStyles = makeStyles((theme) => ({
  badge: {
    marginTop: 4,
    marginRight: theme.spacing(3),
  },
  typography: {
    marginTop: 0,
  },
  inactiveLink: {
    color: theme.palette.text.disabled,
  },
  h2: {
    marginBottom: -1,
  },
  breadCrumb: {
    marginBottom: 18,
    marginTop: 18,
  },
}));

const Index = ({Selectedpagename}) => {

    const classes = useStyles();

    return (
      <PageNavigationContainer className="pagenavigation">
          <Breadcrumbs className={classes.breadCrumb} id="navigation">
            <Typography variant="h3" className={clsx(classes.inactiveLink)}>
              Negotiate
            </Typography>
            <Link variant="h3">Commodities Tracker</Link>
            <Typography variant="h2" className={classes.h2}>
             {Selectedpagename}
            </Typography>
          </Breadcrumbs>
          <Box display="flex" flexDirection="row" marginLeft="auto" marginRight={3}>
            <Badge color="error" badgeContent={24} className={classes.badge}>
              <BellIcon color="primary" style={{ fontSize: 16 }} />
            </Badge>
            <Typography className={classes.typography}>
              Page Level Information / Function
            </Typography>
          </Box>
      </PageNavigationContainer>
    )
}

export default Index
