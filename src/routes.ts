import IndexView from "./views/IndexView.svelte";
import LoginView from "./views/LoginView.svelte";
import StoryBoardView from "./views/StoryBoardView.svelte";
import SignUpView from "./views/SignUp.svelte";
import ProfileView from "./views/ProfileView.svelte";

const routes = {
  "/": IndexView,
  "/login": LoginView,
  "/story": StoryBoardView,
  "/signup": SignUpView,
  "/profile/:email": ProfileView,
};

export default routes;
