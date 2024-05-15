import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {User} from "@/interfaces/user";
import {AuthService} from "@/services/auth.service";

export const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const user = Cookies.get('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    return {currentUser};
}