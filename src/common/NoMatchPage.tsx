import React from "react";
import { Result, Button } from "antd";
import { withRouter } from "react-router-dom";
export const NoMatchPage = withRouter(({ history }) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Ошибка в роутинге!!!"
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.push("/");
          }}
        >
          На главную
        </Button>
      }
    />
  );
});
