import { useEffect, useState } from "react";
import { getProfile } from "../../api/member";
import { Profile } from "../../models/Profile";
import ProfileCard from "./ProfileCard";
import { Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { deleteMember } from "../../api/auth";

const ProfileContainer = () => {
  const [profile, setProfile] = useState<Profile>();
  const [shouldFetch, setShouldFetch] = useState(true);

  const navigate = useNavigate();

  const fetchProfile = async () => {
    const response = await getProfile();
    setProfile(response);
  };

  const deactiveMember = async () => {
    try {
      await deleteMember();
      alert("탈퇴되었습니다.");
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      alert("탈퇴에 실패했습니다.");
    }
  };

  const handleDeactivate = async () => {
    const userConfirmed = window.confirm("정말로 탈퇴하시겠습니까?");
    if (userConfirmed) {
      deactiveMember();
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchProfile();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <>
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

      <div style={{ display: "flex", width: "70%", marginTop: "40px" }}>
        <div style={{ marginLeft: "auto", marginRight: "40px" }}>
          <Button bg={"red"} onClick={handleDeactivate}>
            탈퇴하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
