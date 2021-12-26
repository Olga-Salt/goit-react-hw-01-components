import './App.css';
import SocialPofile from './components/social-profile/SocialProfile';
import userProf from './components/social-profile/user.json';

import data from './components/statistics/data.json';
import Statistics from './components/statistics/Statistics';

import friends from './components/friendList/friends.json';
import FriendList from './components/friendList/FriendList';

import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './components/transactionHistory/transactions.json';

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
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
