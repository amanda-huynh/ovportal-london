import React from "react";
import { Card, CardContent, CardHeader, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.primary,
    lineHeight: "60px",
    width: 250,
  },
}));

const SearchCardList = ({ filteredCards, handleCard }) => {
  const classes = useStyles();

  return (
    <div className="SearchBar-suggestions">
      <Grid container spacing={2}>
        <Grid item>
          <Grid container justifyContent="center" spacing={2}>
            {filteredCards.map((card) => (
              <Grid key={card.project_id} item>
                <Card
                  className={classes.paper}
                  onClick={() => handleCard(card.project_name)}
                >
                  <CardHeader
                    title={card.project_name}
                    subheader={`Partner: ${card.partner_name}`}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {`Total Walks: ${card.project_total_walks}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`Total Images: ${card.project_total_images}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`Data Processed: ${card.project_data_processed_count}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchCardList;