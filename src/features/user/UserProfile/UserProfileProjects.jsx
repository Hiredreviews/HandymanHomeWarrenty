import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

const UserProfileProjects = ({ photos }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="image" content="Photos" />
        <Image.Group size="small">
          {photos &&
            photos.map(photo => (
              <LazyLoad
                key={photo.id}
                height={150}
                placeholder={<Image src="/assets/user.png" alt="User" />}
              >
                <Image src={photo.url || "/assets/user.png"} alt="User" />
              </LazyLoad>
            ))}
        </Image.Group>
      </Segment>
    </Grid.Column>
  );
};
export default UserProfileProjects;
