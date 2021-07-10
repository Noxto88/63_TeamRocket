import React, { useEffect } from 'react'
import { auth, getUserDetails } from "../../firebase/config";
import { useSelector,useDispatch } from 'react-redux';
import { closeSlidingComponent } from '../../redux/sliderSlice';
import { setInitiial } from '../../redux/cartSlice';
import { useRouter } from "next/router";


const Layout = ({children}) => {
    const dispatch = useDispatch()
    const router = useRouter();

  
    async function onAuthStateChange() {
        return auth.onAuthStateChanged(async (user) => {
          if (user) {
            dispatch(closeSlidingComponent());
            router.push('/store')
            const userDetails = await getUserDetails(auth.currentUser.uid);
            if (userDetails) {
              dispatch(
                LogInUser([
                  'type of user',  
                  user.displayName,
                ])
              );
            }
          } else {
            dispatch(LogOutUser());
          }
        });
      }
    
    
    const logOut = () => {
        dispatch(closeSlidingComponent());
        auth.signOut();
        dispatch(setInitiial());
      };
    
      useEffect(() => {
        const unsubscribe = onAuthStateChange();
        return () => {
          unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout
