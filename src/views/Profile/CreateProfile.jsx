import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../hooks/useProfile';
import BrownBear from '../../assets/brown2.png';
import PandaBear from '../../assets/panda2.png';
import './Profile.css';
import { createProfile } from '../../services/profiles';

export default function CreateProfile() {
  const { profile, setProfile, loading } = useProfile();
  const history = useHistory();
  const [bear, setBear] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(profile.user_name);
    setBear(profile.bear);
  }, [profile]);

  const handleChange = (e) => {
    setBear(e.target.value);
  };

  const handleSubmit = async () => {
    await createProfile({ user_name: name, bear: bear });
  };
  return (
    <div className="create-container">
      <h2>create profile</h2>
      <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="bear"
            value="brown"
            checked={bear === 'brown'}
            onChange={handleChange}
          />
          <img src={BrownBear} />
        </label>
        <label>
          <input
            type="radio"
            name="bear"
            value="panda"
            checked={bear === 'panda'}
            onChange={handleChange}
          />
          <img src={PandaBear} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
