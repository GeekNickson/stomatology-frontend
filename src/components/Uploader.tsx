import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../styles/themes/default-theme';
import { FC, useState } from 'react';
import { Image } from 'react-bootstrap';

interface FileWithPreview {
  file: File;
  preview: string;
}
interface UploaderProps {
  setFieldValue: (name: string, value: any) => void;
}
interface DropzoneProps {
  isDragAccept: boolean;
  isDragReject: boolean;
  isDragActive: boolean;
}

const getColor = (props: DropzoneProps) => {
  if (props.isDragAccept) {
    return theme.color.success;
  }
  if (props.isDragReject) {
    return theme.color.danger;
  }
  if (props.isDragActive) {
    return theme.color.action;
  }
  return theme.color.light;
};

const Container = styled.div<DropzoneProps>`
  font-size: ${({ theme }) => theme.fontSize.mediumForm};
  display: flex;
  margin: 2rem auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  border-width: 3px;
  border-radius: 1rem;
  border-color: ${(props) => getColor(props)};
  border-style: solid;
  background-color: white;
  color: ${({ theme }) => theme.color.action};
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 9rem;
  height: 9rem;
`;

const Uploader: FC<UploaderProps> = ({ setFieldValue }) => {
  const [file, setFile] = useState<FileWithPreview | null>(null);

  const onDrop = (files: File[]) => {
    setFile({
      file: files[0],
      preview: URL.createObjectURL(files[0]),
    });
    setFieldValue('profilePicture', files[0]);
  };

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const preview = (
    <div>
      <StyledImage src={file?.preview} alt={file?.file.name} thumbnail roundedCircle />
    </div>
  );

  return (
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      {file ? (
        preview
      ) : (
        <>
          <FontAwesomeIcon icon={faUpload} />
          <p className="text-center fs-4">Drag your profile picture here</p>
        </>
      )}
    </Container>
  );
};

export default Uploader;
