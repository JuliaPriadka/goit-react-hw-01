import FriendListItem from "../FriendList/FriendListItem"
import css from "./FriendList.module.css";

export default function Friendlist({friends}) {

    return (
        <ul className={css.friendList}>
            {friends.map((friend => {
                return (<li key={friend.id}>
                    <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
                </li>)
            }))}
        </ul>
    );
}