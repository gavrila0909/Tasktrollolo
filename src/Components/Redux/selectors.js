export const getIsLoading = state => state.food.isLoading;
export const getError = state => state.food.error;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getEmail = state => state.auth.user?.email;
export const getUser = state => state.auth.user;
export const getUsername = state => state.auth.user?.username;
export const getItems = state => state.food.items;
export const getDailyKcal = state => state.auth.user?.dailyKcal || 'N/A';
