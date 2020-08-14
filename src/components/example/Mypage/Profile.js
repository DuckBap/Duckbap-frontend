import React from "react";
import {
  ProfileContainer,
  ProfileColumn,
  Level,
  Graph,
  FavoriteList,
  AddButton,
  SmallIdolCard,
} from "./Profile.styles";

const Profile = () => {
  const percent = "60%";
  const idols = ["", "", ""];
  return (
    <ProfileContainer>
      <ProfileColumn>
        <img src="" alt="profile" />
        <div>사용자</div>
      </ProfileColumn>
      <ProfileColumn>
        <Level>Lv. 10</Level>
        <Graph theme={{ percent }}>
          <span>{percent}</span>
        </Graph>
        <FavoriteList>
          {idols.map((idol) => {
            return <SmallIdolCard src={idol} alt="likeIdol" />;
          })}
          <AddButton>+</AddButton>
        </FavoriteList>
      </ProfileColumn>
    </ProfileContainer>
  );
};

export default Profile;
