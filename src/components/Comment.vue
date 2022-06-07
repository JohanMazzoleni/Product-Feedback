<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
	name: String,
	username: String,
	avatar: String,
	message: String,
	index: Number,
	commentMax: Number,
})

var last = ref(props.index! + 1 == props.commentMax);

</script>

<style lang="scss" scoped>
@import "../css/comment.scss";
</style>

<template>
	<div class="comment">
		<div class="commentTop">
			<div class="left">
				<img :src="props.avatar" alt="" class="avatar">
				<div class="details">
					<div class="name">{{ props.name }}</div>
					<div class="username">@{{ props.username }}</div>
				</div>
			</div>
			<div class="right">Reply</div>
		</div>
		<div class="commentContent"
			:style="`${!last ? 'border-bottom: 1px solid #8c92b327;' : ''}`">
			{{ props.message }}
		</div>
	</div>
</template>