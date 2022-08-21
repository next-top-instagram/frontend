import LoginView from "./views/LoginView.svelte";
import StoryBoardView from "./views/StoryBoardView.svelte";
import SignUpView from "./views/SignUp.svelte";

const routes = {
  "/": LoginView,
  "/story": StoryBoardView,
  "/signup": SignUpView,
};

export default routes;
