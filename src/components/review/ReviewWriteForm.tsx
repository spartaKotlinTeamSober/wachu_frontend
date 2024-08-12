import {
  Button,
  Group,
  Image,
  rem,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { IconUpload, IconX, IconPhoto } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wine } from "../../models/Wine";
import { getWine } from "../../api/wines";
import WineModal from "../wine/WineModal";
import { postReview } from "../../api/reviews";
import StarRating from "../common/StarRating";

const ReviewWriteForm = () => {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [wine, setWine] = useState<Wine>();
  const [rating, setRating] = useState<number>(0);

  const navigate = useNavigate();

  const handleRatingChange = (rating: number) => {
    setRating(rating);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { title, description } = data;

    if (!wine) {
      alert("와인을 선택해주세요.");
      return;
    }

    if (!title || !description) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    if (rating === 0) {
      alert("별점을 선택해주세요.");
      return;
    }

    createReview(title.toString(), description.toString());
  };

  const createReview = async (title: string, description: string) => {
    if (wine?.id !== undefined) {
      const response = await postReview(
        {
          wineId: wine?.id,
          title: title,
          description: description,
          score: rating,
        },
        files
      );

      navigate("/review/" + response.id);
    } else {
      alert("와인을 선택해주세요.");
      setWine(undefined);
    }
  };

  const fetchWine = async (wineId: string) => {
    if (wineId) {
      try {
        const wineResponse = await getWine(wineId);
        setWine(wineResponse);
      } catch (error) {
        console.error(error);
        alert("와인을 불러오는데 실패했습니다.");
      }
    }
  };

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const wineSelected = (wineId: number) => {
    closeModal();
    fetchWine(wineId.toString());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form style={{ marginTop: "20px", width: "50%" }} onSubmit={handleSubmit}>
        <div
          style={{
            border: "1px dashed var(--mantine-color-dimmed)",
          }}
        >
          <Dropzone
            onDrop={(files) => setFiles(files)}
            maxSize={5 * 1024 ** 2}
            maxFiles={3}
            multiple={true}
            accept={["image/*"]}
          >
            <Group
              justify="center"
              gap="xl"
              mih={200}
              style={{ pointerEvents: "none" }}
            >
              <Dropzone.Accept>
                <IconUpload
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-blue-6)",
                  }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-red-6)",
                  }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-dimmed)",
                  }}
                  stroke={1.5}
                />
              </Dropzone.Idle>
              <div>
                <Text size="xl" inline>
                  이미지를 드래그하거나 클릭해서 넣어주세요.
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  5MB 이하의 이미지 파일만 업로드 가능합니다.
                </Text>
              </div>
            </Group>
          </Dropzone>
        </div>
        <div style={{ marginTop: "20px" }}>{previews}</div>
        <Button style={{ marginTop: "20px" }} fullWidth onClick={openModal}>
          와인 선택
        </Button>
        {wine && (
          <div style={{ marginTop: "20px" }}>
            <Text size="xl" fw={700}>
              선택한 와인: {wine.name}
            </Text>
          </div>
        )}
        <TextInput
          style={{ marginTop: "20px" }}
          label="제목"
          placeholder="제목"
          name="title"
        />
        <Textarea
          style={{ marginTop: "20px" }}
          minRows={5}
          maxRows={10}
          autosize
          label="내용"
          placeholder="내용"
          name="description"
        />
        <div style={{ marginTop: "20px" }}>
          <StarRating onRatingChange={handleRatingChange} />
        </div>
        <Button style={{ marginTop: "20px" }} fullWidth type="submit">
          작성하기
        </Button>
      </form>
      <WineModal
        opened={modalOpened}
        closeModal={closeModal}
        onSelected={wineSelected}
      />
    </div>
  );
};

export default ReviewWriteForm;
