import { Card, Image, Text, Button, Group } from "@mantine/core";

function ReviewCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>와인 이름</Text>
      </Group>

      <Text size="sm" c="dimmed">
        와인 리뷰 내용 와인 리뷰 내용 와인 리뷰 내용 와인 리뷰 내용 와인 리뷰
        내용 와인 리뷰 내용 와인 리뷰 내용 와인 리뷰 내용
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        보러가기
      </Button>
    </Card>
  );
}

export default ReviewCard;
