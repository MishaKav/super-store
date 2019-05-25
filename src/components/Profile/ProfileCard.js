import React from "react";
import { Typography, Empty, Card, List } from "antd";

const { Text } = Typography;

function ProfileCard(props) {
  if (!props.email) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  const {
    sub,
    nickname,
    name,
    given_name,
    family_name,
    picture,
    email
  } = props;

  return (
    <Card
      title={name}
      style={{ width: 320 }}
      cover={<img alt={name} src={picture} />}
    >
      <List>
        <List.Item>
          <List.Item.Meta title="First Name" description={given_name} />
        </List.Item>
        <List.Item>
          <List.Item.Meta title="Last Name" description={family_name} />
        </List.Item>
        <List.Item>
          <List.Item.Meta title="Nick Name" description={nickname} />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title="Email"
            description={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            }
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title="UserId"
            description={<Text type="secondary">{sub}</Text>}
          />
        </List.Item>
      </List>
    </Card>
  );
}

export default ProfileCard;
