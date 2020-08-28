import { createContext } from 'react';
import { LoggedUser } from '../../redux/user/user.types';

const CurrentUserContext = createContext<LoggedUser | null>(null);

export default CurrentUserContext;
