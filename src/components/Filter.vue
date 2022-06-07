<script setup lang="ts">
import { ref } from "vue";
import data from "../data/data.json";

var filterState = ref(false);
var allSuggestion = ref(data.productRequests.length);

function setState() {
	filterState.value = !filterState.value;
};
</script>

<style lang="scss" scoped>
@import "../css/filter.scss";
</style>

<template>
	<div class="filter">
		<div class="flex items-center gap-9">
			<div class="suggestion">
				<img src="/assets/suggestions/icon-suggestions.svg" class="w-[23px] h-[24px]" alt="">
				{{allSuggestion}} Suggestions
			</div>
			<div class="filterText" @click="setState">
				Sort by : <span class="font-bold">Most Upvotes</span>
				<img @click="setState" draggable="false" src="/assets/shared/icon-arrow-down-white.svg" alt="" :class="{
					'w-3 h-2 ml-2 duration-200 inline-block cursor-pointer': 1,
					active: filterState,
				}" />
			</div>
		</div>
		<div class="btnFeedback">+ Add Feedback</div>
	</div>
</template>