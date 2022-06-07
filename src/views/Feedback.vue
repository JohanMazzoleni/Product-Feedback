<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import slugify from "slugify";
import { useRoute, useRouter } from 'vue-router'
import { productRequests } from "../data/data.json";

import Thread from "../components/Thread.vue";
import Comment from "../components/Comment.vue";

const route = useRoute();
const router = useRouter();
var slug = route.params.slug;

var feedbackPost = productRequests.filter((element) => slug == slugify(element.title).toLocaleLowerCase());
var feedback = ref(feedbackPost[0]);

var addCommentText = ref("");
var charLeft = ref(250);

onMounted(function () {
	if (feedbackPost.length == 0) {
		return router.push("/");
	};
});

function addComment(): void {
	// Add new comment
}

function updateCharLeft(e: any) {
	charLeft.value = 250 - e.target.value.length;
}

</script>

<style lang="scss" scoped>
@import "../css/feedback.scss";
</style>

<template>
	<div class="container">
		<div class="top">
			<router-link to="/" class="goBack">
				<img src="/assets/shared/icon-arrow-left.svg" alt="" class="w-[8px] h-[11.40px] mr-4 inline-block">Go
				Back
			</router-link>
			<div class="btn">Edit Feedback</div>
		</div>

		<Thread class="mt-4" :title="feedback.title" :content="feedback.description" :tags="feedback.category"
			:upvote="feedback.upvotes" :comment="feedback.comments?.length" :main="true" />

		<section class="commentSection" v-if="feedback.comments?.length! > 0">
			<h2 class="titleSection">{{ feedback.comments?.length }} Comment{{ feedback.comments?.length! > 0 ? "s" : ""
			}}
			</h2>
			<div class="flex flex-col gap-6">
				<Comment v-for="(value, index) in feedback.comments" :key="index + '_comment'" :name="value.user.name"
					:message="value.content" :username="value.user.username" :avatar="value.user.image" :index="index"
					:commentMax="feedback.comments?.length" />
			</div>
		</section>

		<form action="POST" class="commentAddComment" @submit.prevent="addComment">
			<h2 class="formTitle">Add Comment</h2>
			<textarea @input="updateCharLeft" required maxlength="250" v-model="addCommentText" class="formArea"
				placeholder="Type your comment here"></textarea>
			<div class="bottom">
				<div class="charLeft">{{ charLeft }} Characters left</div>
				<button class="btn" type="submit">Post Comment</button>
			</div>
		</form>
	</div>
</template>