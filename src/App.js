import {useState} from 'react';
import UserCard from './components/UserCard';

const user = {
  firstname: 'John',
  lastname: 'Doe',
  image: 'https://randomuser.me/api/portraits/men/75.jpg',
  email: 'john.doe@random.com',
};

function App() {
  const [user, setUser] = useState(user)

  return (
    <div className="App">
      <UserCard
        firstname={user.firstname}
        lastname={user.lastname}
        image={user.image}
        email={user.email}
      />
    </div>
  );
}
export default App;
