import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline && css["online"], !isOnline && css["offline"])}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
