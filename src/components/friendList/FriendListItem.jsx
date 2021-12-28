import PropTypes from 'prop-types';
import { Avatar, FriendListItems, IsOnline } from './FriendList.styled';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <FriendListItems>
      <IsOnline status={isOnline}>{isOnline}</IsOnline>
      <Avatar src={avatar} alt="User avatar" />
      <p>{name}</p>
    </FriendListItems>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
