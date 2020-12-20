import React from 'react';

import Feed from '../Feed/index';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Joel Luis</h1>
        <h2>@joelluis</h2>

        <p>
          Desenvolvedor Front-end
          <a href="https://cuponeria.com.br">@cuponeria</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 03 de novembro de 1986
          </li>
        </ul>

        <Followage>
          <span>
            seguindo
            <strong> 95</strong>
          </span>
          <span>
            <strong>421 </strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
