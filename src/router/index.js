import { createRouter, createWebHistory } from 'vue-router';
import Main from '/src/views/Main.vue';
import FeedbackPage from '/src/views/Feedback.vue';

const routes = [
	{
		path: "/",
		name: "Main",
		component: Main,
	},
	{
		path: "/:slug",
		name: "FeedbackPage",
		component: FeedbackPage,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router;