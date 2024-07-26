import { SimpleGrid } from "@mantine/core";

interface DefaultGridProps {
  children: React.ReactNode;
}

function DefaultGrid({ children }: DefaultGridProps) {
  return <SimpleGrid cols={3}>{children}</SimpleGrid>;
}

export default DefaultGrid;
