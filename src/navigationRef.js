import { NavigationActions } from "react-navigation";

let navigatior;

export const setNavigator = (nav) => {
  navigatior = nav;
};

export const navigate = (routeName, params) => {
  navigatior.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
