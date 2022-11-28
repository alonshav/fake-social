import React from 'react';
import { StyledAddPostCard } from '../../../styles/AddPostsForm.Styled';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { addPost } from '../postsSlice';
import ProfilePicture from '../../../shared/components/ProfilePicture/ProfilePicture';
import { StyledPublishPostButton } from '../../../styles/PublishAPostButton.styled';
import { useAppSelector } from '../../../store/useAppSelector';
import { selectCurrentUser } from '../../User/userSlice';


export const AddPost = () => {

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);

  // const [title, setTitle] = useState('');
  // const [text, setText] = useState('');
  // const [topic, setTopic] = useState('');
  // const [image, setImage] = useState('');

  // const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  // const onTextChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

  const handlePublish = () => {
    if (currentUser) {
      console.log('currentUser:', currentUser);
      const author = {
        nickName: currentUser.nickName,
        firstName: currentUser.firstName,
        profilePicture: currentUser.profilePicture,
        author_id: currentUser.id
      };
      console.log('author:', author);
      dispatch(addPost(author, 'Waduuup'));
    }
  };

  return (
    <StyledAddPostCard>
      <ProfilePicture userPicture={'https://www.w3schools.com/w3css/img_lights.jpg'} userNickname={'Beitz'} />
      <StyledPublishPostButton type='button' onClick={handlePublish}>Start a new post</StyledPublishPostButton>
    </StyledAddPostCard>
  )
    ;
};
