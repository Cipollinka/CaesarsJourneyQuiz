import {
  CommonActions,
  useNavigation as useStackNavigation,
  useNavigationState,
} from '@react-navigation/native';

export enum ScreenName {
  Registration = 'Registration',
  Menu = 'Menu',
  Scoreboard = 'Scoreboard',
  Settings = 'Settings',
  Location = 'Location',
  Game = 'Game',
  Start = 'Start',
  Books = 'Books',
  Easy = 'Easy',
  Hard = 'Hard',
}

export const useNavigation = () => {
  const {dispatch} = useStackNavigation();

  const currentScreen = useNavigationState(state =>
    state?.routes ? state.routes[state.index].name : '',
  );

  const navigate = (screen: ScreenName) => {
    if (currentScreen === screen) {
      return;
    }
    dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screen}],
      }),
    );
  };
  return {navigate, currentScreen};
};
