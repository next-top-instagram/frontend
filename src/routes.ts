import LoginView from "./views/LoginView.svelte";
import StoryBoardView from "./views/StoryBoardView.svelte";

const routes = {
  "/": LoginView,
  "/story": StoryBoardView,
};

export default routes;
