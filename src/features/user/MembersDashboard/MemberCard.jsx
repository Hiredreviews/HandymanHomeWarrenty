import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MemberCard = ({ user }) => (
  <Card as={Link} to={`/profile/${user.id}`}>
    <Image src={user.photoURL || "/assets/user.png"} size="tiny" centered />
    <Card.Content textAlign="center">
      <Card.Header content={user.displayName} />
    </Card.Content>
    <Card.Meta textAlign="center">
      <span>{user.city}</span>
    </Card.Meta>
  </Card>
);

export default MemberCard;
