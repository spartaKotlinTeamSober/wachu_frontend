import { Card, Group, Image, Text } from "@mantine/core";
import { Profile } from "../../models/Profile";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={profile.profileUrl ?? "assets/no_image.webp"}
          alt={"프로필 포토"}
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
            objectFit: "cover",
          }}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={100}>{profile.email}</Text>
      </Group>

      <Text fw={500}>{profile.nickname}</Text>
    </Card>
  );
};

export default ProfileCard;
