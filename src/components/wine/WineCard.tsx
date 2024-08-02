import React from "react";
import { Card, Image, Text, Button, Group } from "@mantine/core";

interface WineCardProps {
  imageSrc: string;
  wineName: string;
  buttonText?: string;
  onSelected?: () => void;
}

const WineCard: React.FC<WineCardProps> = ({
  imageSrc,
  wineName,
  buttonText = "보러가기",
  onSelected,
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageSrc} height={480} alt={wineName} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{wineName}</Text>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        {buttonText}
      </Button>
    </Card>
  );
};

export default WineCard;
