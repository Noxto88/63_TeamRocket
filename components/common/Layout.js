import React, { useEffect } from "react";
import { auth, getUserDetails } from "../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { closeSlidingComponent } from "../../redux/sliderSlice";
import { setInitiial } from "../../redux/cartSlice";
import { useRouter } from "next/router";
import { LogOutUser } from "../../redux/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  async function onAuthStateChange() {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(closeSlidingComponent());
        // console.log({ user });
        router.push("/store");
        //console.log("1");
        const userDetails = await getUserDetails(auth.currentUser.uid);
        //console.log(userDetails);
        if (userDetails) {
          dispatch(LogInUser(["type of user", user.displayName]));
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
