import * as React from "react";
import { inject, observer } from "mobx-react";
import { observable } from "mobx";
import { Input, Tooltip, Icon, Button, Form } from "antd";
import styles from "./InputUserData.module.css";
import { IAuthentication } from "../../../interfaces/IAuthenticationSchema";

interface AddUserDataProps {
  authentication?: IAuthentication;
}

@inject("authentication")
@observer
export class AddUserData extends React.Component<AddUserDataProps> {
  @observable
  value: string = "";

  render() {
    return (
      <div className={styles.root}>
        <Form layout="inline" onSubmit={this.onSubmit}>
          <Form.Item>
            <Input
              value={this.value}
              onChange={this.onChange}
              placeholder="Enter your nickname"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              suffix={
                <Tooltip title="It will allow to load the list your TODO">
                  <Icon
                    type="info-circle"
                    style={{ color: "rgba(0,0,0,.45)" }}
                  />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              LogIn
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.value = e.currentTarget.value;
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { logIn } = this.props.authentication!;
    logIn(this.value);
    this.value = "";
  };
}
