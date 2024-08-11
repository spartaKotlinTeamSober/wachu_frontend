import { useEffect, useState } from "react";
import { getProfile } from "../../api/member";
import { Profile } from "../../models/Profile";
import ProfileCard from "./ProfileCard";
import { Text } from "@mantine/core";

const ProfileContainer = () => {
  const [profile, setProfile] = useState<Profile>();
  const [shouldFetch, setShouldFetch] = useState(true);

  const fetchProfile = async () => {
    const response = await getProfile();
    setProfile(response);
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchProfile();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {profile === undefined ? (
        <Text size="xl" fw={700} style={{ marginTop: "60px" }}>
          프로필 조회 실패
        </Text>
      ) : (
        <ProfileCard profile={profile} />
      )}
    </div>
  );
};

export default ProfileContainer;
