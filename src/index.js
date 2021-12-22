import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// const data = userProf;

// function Painting(props) {
//   console.log(props);
//   const { username, tag, location, avatar, followers, views, likes } = props;

//   return (
//     <div className="profile">
//       <div className="description">
//         <img src={avatar} alt="User avatar" className="avatar" />
//         <p className="name">{username}</p>
//         <p className="tag">@{tag}</p>
//         <p className="location">{location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Painting
//     userName={data.username}
//     tag={data.tag}
//     location={data.location}
//     avatar={data.avatar}
//     followers={data.stats.followers}
//     views={data.stats.views}
//     likes={data.stats.likes}
//   />,
//   document.querySelector('#root'),
// );

// ReactDOM.render(<App />, document.querySelector('#root'));
