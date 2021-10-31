import React from 'react';
import Header from '../../components/header';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const name = useSelector(state => state.userData.name);
  const username = useSelector(state => state.userData.username);
  const email = useSelector(state => state.userData.email);
  const phone = useSelector(state => state.userData.phone);
  return (
    <div>
      <Header/>
      <main className="profile-container">
        <div className="profile-data">
          <h2>Seus dados:</h2>
          <div className="profile-data-item">
            <b>Nome de usuário:</b>
            {username}
          </div>
          <div className="profile-data-item">
            <b>Nome Completo:</b>
            {name}
          </div>
          <div className="profile-data-item">
            <b>Email: </b>
            {email}
          </div>
          <div className="profile-data-item">
            <b>Telefone:</b>
            {phone}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Profile;
