import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './Friendlist.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status statusType={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
