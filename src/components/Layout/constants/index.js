/* eslint-disable import/prefer-default-export */
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import Matches from '../../Matches';
import EditProfileContent from '../../EditProfileContent';

export const headerIconButtons = [
  {
    icon: faBell,
    color: 'primary',
    component: Matches,
    title: 'Matches',
  },
  {
    icon: faUser,
    color: 'primary',
    component: EditProfileContent,
    title: 'Perfil',
  },
];
