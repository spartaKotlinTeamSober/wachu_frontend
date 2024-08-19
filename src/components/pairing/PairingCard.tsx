import React from "react";
import { Pairing } from "../../models/Pairing";
import { Card, Group, Button, Image, Text } from "@mantine/core";

interface PairingCardProps {
  pairing: Pairing;
  onSelected?: () => void;
}

const PairingCard: React.FC<PairingCardProps> = ({ pairing, onSelected }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={pairing.photoUrl}
          alt={"페어링 포토"}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "contain",
          }}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }}
          fw={100}
        >
          {pairing.wine.name}
        </Text>
      </Group>

      <Text
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        }}
        fw={500}
      >
        {pairing.title}
      </Text>

      <Group style={{ marginTop: "8px" }} gap={"sm"}>
        {pairing.member.profileUrl && (
          <Image
            src={pairing.member.profileUrl}
            alt={`${
              pairing.member.nickname || `회원${pairing.member.id}`
            } 님의 프로필`}
            width={18}
            height={18}
            radius="50%"
            style={{
              aspectRatio: "1 / 1",
              objectFit: "cover",
            }}
          />
        )}
        <Text size="sm" fw={300}>
          {pairing.member.nickname
            ? `${pairing.member.nickname}`
            : `회원${pairing.member.id}번`}
        </Text>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        상세보기
      </Button>
    </Card>
  );
};

export default PairingCard;
