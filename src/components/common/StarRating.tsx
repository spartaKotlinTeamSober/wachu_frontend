import React, { useState } from "react";
import { Group, Tooltip } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

interface StarRatingProps {
  maxStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  maxStars = 5,
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Group>
        {[...Array(maxStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <Tooltip
              key={index}
              label={`${starValue} / ${maxStars}`}
              position="bottom"
              withArrow
            >
              <IconStar
                size={24}
                stroke={1.5}
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleRating(starValue)}
                style={{
                  cursor: "pointer",
                  color:
                    starValue <= (hoverRating || rating)
                      ? "#ffd700"
                      : "#e4e5e9",
                }}
              />
            </Tooltip>
          );
        })}
      </Group>
    </div>
  );
};

export default StarRating;
