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
        <Image src={pairing.photoUrl} height={300} alt={"페어링 포토"} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={100}>{pairing.wine.name}</Text>
      </Group>

      <Text fw={500}>{pairing.title}</Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        상세보기
      </Button>
    </Card>
  );
};

export default PairingCard;
