<script setup lang="ts">
import { ref } from "vue";
import slugify from "slugify";


const props = defineProps({
	title: String,
	content: String,
	tags: String,
	upvote: Number,
	comment: Number,
	main: Boolean,
})

function capitalize(str: string): string {
	return str[0].toLocaleUpperCase() + str.slice(1);
};

var alreadyUpvote = ref(false);

function addVote(): any {
	if (!alreadyUpvote.value) {
		alreadyUpvote.value = true;
		upvote.value++;
	}
	else {
		alreadyUpvote.value = false;
		upvote.value--;
	}
}

var upvote = ref(props.upvote ? props.upvote : 0);
var comment = ref(props.comment ? props.comment : 0);
var tags = ref(capitalize(props.tags!));
var link = ref("/" + slugify(props.title!).toLocaleLowerCase());
var main = ref(props.main);
</script>

<style lang="scss" scoped>
@import "../css/thread.scss";
</style>

<template>
	<div class="thread">
		<div :class="{ upvote: 1, activeUpVote: alreadyUpvote }" @click="addVote">
			<img v-if="!alreadyUpvote" draggable="false" src="/assets/shared/icon-arrow-up.svg" alt=""
				class="w-2 h-[5.6px]" />
			<img v-else draggable="false" src="/assets/shared/icon-arrow-up-white.svg" alt="" class="w-2 h-[5.6px]" />
			{{ upvote }}
		</div>
		<div class="md:ml-10 md:w-[374px]">
			<div v-if="main">
				<h1 v-if="main" class="threadTitle">{{ title }}</h1>
			</div>
			<router-link :to="link" v-else>
				<h2 class="threadTitle">{{ title }}</h2>
			</router-link>
			<p class="threadContent">
				{{ content }}
			</p>
			<div class="tagList">
				<div class="btn-tags">{{ tags }}</div>
			</div>
		</div>
		<div class="bottom">
			<div :class="{ upvote: 1, activeUpVote: alreadyUpvote }" @click="addVote">
				<img v-if="!alreadyUpvote" draggable="false" src="/assets/shared/icon-arrow-up.svg" alt=""
					class="w-3 h-[8.39px]" />
				<img v-else draggable="false" src="/assets/shared/icon-arrow-up-white.svg" alt=""
					class="w-3 h-[8.39px]" />
				{{ upvote }}
			</div>
			<div class="comment">
				<img src="/assets/shared/icon-comments.svg" alt="" class="w-[18px] h-4">
				{{ comment }}
			</div>
		</div>
	</div>
</template>