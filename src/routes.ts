import IndexView from "./views/IndexView.svelte";
import LoginView from "./views/LoginView.svelte";
import StoryBoardView from "./views/StoryBoardView.svelte";
import SignUpView from "./views/SignUp.svelte";
import ProfileView from "./views/ProfileView.svelte";
import CommentView from "./views/CommentView.svelte";
import NotiView from "./views/NotiView.svelte";
import OnePostView from "./views/OnePostView.svelte";

const routes = {
  "/": IndexView,
  "/login": LoginView,
  "/story": StoryBoardView,
  "/signup": SignUpView,
  "/profile/:email": ProfileView,
  "/comment/:id": CommentView,
  "/noti": NotiView,
  "/post/:id": OnePostView,
};

export default routes;
