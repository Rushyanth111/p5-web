import React from "react";
import { Card, CardHeader } from "@material-ui/core";

function QuestionCard({ question, isAnswered }) {
  return (
    <Card>
      <CardHeader
        title={question}
        titleTypographyProps={{
          variant: "h6",
        }}
      ></CardHeader>
    </Card>
  );
}

export default QuestionCard;
