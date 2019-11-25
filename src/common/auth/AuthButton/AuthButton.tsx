import * as React from "react";
import { inject, observer } from "mobx-react";
import { Typography, Button } from "antd";
import styles from "./AuthButton.module.css";

export const AuthButton = inject("authentication")(
  observer(({ authentication }) => {
    const { Text } = Typography;
    const { isAuthenticated, logOut } = authentication;

    return isAuthenticated ? (
      <Text strong className={styles.root}>
        <span className={styles.margin}>Welcome!</span>
        <Button
          type="primary"
          onClick={() => {
            logOut();
          }}
        >
          LogOut
        </Button>
      </Text>
    ) : (
      <Text strong className={styles.root}>
        You aren't authorised!
      </Text>
    );
  })
);
