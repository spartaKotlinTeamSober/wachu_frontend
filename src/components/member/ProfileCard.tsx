import { Avatar, Paper, Text } from "@mantine/core";
import { Profile } from "../../models/Profile";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      bg="var(--mantine-color-body)"
      style={{ width: "20%", margin: "50px auto" }}
    >
      <Avatar
        src={profile.profileUrl ?? "/no_image.webp"}
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {profile.email ?? "이메일 정보 없음"}
      </Text>
      <Text ta="center" fz="lg" fw={200} mt="md">
        {profile.nickname ?? "닉네임 정보 없음"}
      </Text>
    </Paper>
  );
};

export default ProfileCard;
