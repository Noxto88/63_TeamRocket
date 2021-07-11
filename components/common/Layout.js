import React, { useEffect } from "react";
import { auth, getUserDetails } from "../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { closeSlidingComponent } from "../../redux/sliderSlice";
import { setInitiial } from "../../redux/cartSlice";
import { useRouter } from "next/router";
import { LogOutUser, LogInUser } from "../../redux/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  async function onAuthStateChange() {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(closeSlidingComponent());
        const userDetails = await getUserDetails(auth.currentUser.uid);
        const { userType } = userDetails;
        userType === 'supplier' ? router.push("/market") : router.push("/store");

        if (userDetails) {
          dispatch(LogInUser([userType, user.displayName]));
        }
      } else {
        dispatch(LogOutUser());
        router.push("/");
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{children}</div>;
};

export default Layout;
