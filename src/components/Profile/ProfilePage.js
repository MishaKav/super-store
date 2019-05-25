import React, { useEffect, useState } from "react";
import { Typography, Row } from "antd";
import ProfileCard from "./ProfileCard";
import Auth from "../../Auth/Auth";

const { Title, Text } = Typography;

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Auth.getProfile((profile, error) => {
      setProfile(profile);
      setError(error);
    });
  }, []);

  if (error) {
    return <Text type="danger">{JSON.stringify(error)}</Text>;
  }

  return (
    <>
      <Row type="flex" justify="center" align="middle">
        <Title>Profile Page</Title>
      </Row>

      <ProfileCard {...profile} />
    </>
  );
}

export default ProfilePage;
