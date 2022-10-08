import React from 'react';
import { StyledAddPostCard } from '../../../styles/AddPostsForm.Styled';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addPost } from '../postsSlice';
import ProfilePicture from '../../../components/common/ProfilePicture/ProfilePicture';
import { StyledPublishAPostButton } from '../../../styles/PublishAPostButton.styled';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectCurrentUser } from '../../User/userSlice';
import { IUser } from '@types';


export const PostAdd = () => {

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser)

  // const [title, setTitle] = useState('');
  // const [text, setText] = useState('');
  // const [topic, setTopic] = useState('');
  // const [image, setImage] = useState('');

  // const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  // const onTextChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

  const onPublishPost = (currentUser:IUser) => {

    const author = {
      nick_name: currentUser.nick_name,
      full_name: currentUser.full_name,
      profile_picture: currentUser.profile_picture,
      author_id: currentUser.id
    };

    dispatch(addPost(author, 'Waduuup'));
  };

  return (
    <StyledAddPostCard>
      <ProfilePicture userPicture={'https://www.w3schools.com/w3css/img_lights.jpg'} userNickname={'Beitz'} />
      <StyledPublishAPostButton type='button' onClick={()=>onPublishPost(currentUser)}>Start a new post</StyledPublishAPostButton>
    </StyledAddPostCard>
  )
    ;
};
