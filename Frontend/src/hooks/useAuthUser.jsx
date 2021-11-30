import { useContext} from "react";
import {AuthContextUser} from '../provider/AuthProviderUser';

export default () => useContext(AuthContextUser);