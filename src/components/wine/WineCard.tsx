import React from "react";
import { Card, Image, Text, Button, Group, Tooltip } from "@mantine/core";

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
        <Image
          src={imageSrc}
          alt={wineName}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "contain",
          }}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Tooltip label={wineName} position="top" withArrow>
          <Text
            fw={500}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
              fontSize: "clamp(12px, 2vw, 16px)",
            }}
          >
            {wineName}
          </Text>
        </Tooltip>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onSelected}>
        {buttonText}
      </Button>
    </Card>
  );
};

export default WineCard;
