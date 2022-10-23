import React from 'react';
import { StyledAddPostCard } from '../../../styles/AddPostsForm.Styled';
import { useAppDispatch } from '../../../hooks/store/useAppDispatch';
import { addPost } from '../postsSlice';
import ProfilePicture from '../../../components/common/ProfilePicture/ProfilePicture';
import { StyledPublishAPostButton } from '../../../styles/PublishAPostButton.styled';
import { useAppSelector } from '../../../hooks/store/useAppSelector';
import { selectCurrentUser } from '../../User/userSlice';


export const PostAdd = () => {

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
      <StyledPublishAPostButton type='button' onClick={handlePublish}>Start a new post</StyledPublishAPostButton>
    </StyledAddPostCard>
  )
    ;
};
