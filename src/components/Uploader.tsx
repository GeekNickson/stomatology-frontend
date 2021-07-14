import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../styles/themes/default-theme';
import { FC, useState } from 'react';

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
    return theme.color.primary;
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
  width: fill-available;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-width: 0.5rem;
  border-radius: 1rem;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: white;
  color: ${({ theme }) => theme.color.primary};
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const StyledImage = styled.img`
  max-width: 200px;
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
      <StyledImage src={file?.preview} alt={file?.file.name} />
    </div>
  );

  return (
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      <FontAwesomeIcon icon={faUpload} />
      {file && preview}
    </Container>
  );
};

export default Uploader;
