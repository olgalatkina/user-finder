import { UserStat } from 'components/UserStat';
import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img
      className={styles.avatar}
      src={props.avatar}
      alt={props.name}
    />
    <UserTitle
      created={props.created}
      login={props.login}
      name={props.name}
    />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio.'}
    </p>
    <UserStat
      followers={props.followers}
      following={props.following}
      repos={props.repos}
    />
    <UserInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
