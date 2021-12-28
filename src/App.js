import SocialPofile from './components/social-profile/SocialProfile';
import userProf from './components/social-profile/user.json';

import data from './components/statistics/data.json';
import Statistics from './components/statistics/Statistics';
import styles from './components/statistics/Statistics.module.css';

import friends from './components/friendList/friends.json';
import FriendList from './components/friendList/FriendList';
import { FriendListWrap } from './components/friendList/FriendList.styled';

import transactions from './components/transactionHistory/transactions.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

export default function App() {
  return (
    <div className="App">
      <div>
        <SocialPofile
          username={userProf.username}
          tag={userProf.tag}
          location={userProf.location}
          avatar={userProf.avatar}
          stats={userProf.stats}
        />
      </div>
      <div className={styles.statisticsWrapper}>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendListWrap>
        <FriendList friends={friends} />
      </FriendListWrap>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}
