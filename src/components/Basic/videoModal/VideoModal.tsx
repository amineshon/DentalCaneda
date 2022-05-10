import { Box, Modal, Typography } from '@mui/material';
import React from 'react';

interface Props {
  open: boolean;
  handleClose: () => void;
  style: any;
  url: string;
}
const VideoModal = ({ open, handleClose, style, url }: Props) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <iframe
          src={url}
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          width={'100%'}
          height={'100%'}
        ></iframe>
      </Box>
    </Modal>
  );
};

export default VideoModal;
