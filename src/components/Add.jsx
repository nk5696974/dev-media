import { Avatar, Box, Button, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import { DateRange, EmojiEmotions } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "30px"
});

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)} title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(47%)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant='h6' color="gray" textAlign="center">Create post</Typography>
                    <UserBox>
                        <Avatar src='https://mui.com/static/images/avatar/4.jpg' alt="images" sx={{ width: 30, height: 30 }}></Avatar>
                        <Typography fontWeight={500} variant="span">John Doe</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }} placeholder="what's on your mind ?" multiline rows={3} variant="standard" />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button  sx={{width:"100px"}}><DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add