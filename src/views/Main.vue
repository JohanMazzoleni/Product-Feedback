<script setup lang="ts">
import { ref, onMounted } from "vue";

import Filter from "../components/Filter.vue";
import Thread from "../components/Thread.vue";
import Header from "../components/Header.vue";
import Aside from "../components/Aside.vue";
import data from "../data/data.json";

var asideState = ref(false);
var threadList = ref(data.productRequests);

function changeAsideState() {
	asideState.value = !asideState.value;
}

</script>

<style lang="scss" scoped>
@import "../css/main.scss";
</style>

<template>
	<Header @asideState="changeAsideState" />
	<div class="2xl:flex 2xl:w-[1110px] 2xl:mt-[94px] 2xl:gap-[30px] 2xl:mx-auto">
		<Aside :asideState="asideState" />
		<main class="mt-[72px] md:mt-0" @click="asideState = false">
			<Filter />
			<div class="threadList" v-if="threadList.length != 0">
				<Thread v-for="(value, index) in threadList" :key="index" :title="value.title"
					:content="value.description" :tags="value.category" :upvote="value.upvotes"
					:comment="value.comments?.length" :main="false" />
			</div>
			<div class="emptyThread" v-else>
				<img src="/assets/suggestions/illustration-empty.svg" alt=""
					class="w-[102px] md:w-[129px] h-[184px] md:h-[246px] mx-auto pt-[76px] md:pt-[110px]">
				<h2 class="title">There is no feedback yet.</h2>
				<p class="description">Got a suggestion? Found a bug that needs to be squashed? We love hearing about
					new
					ideas to improve our app.</p>
				<div class="flex justify-center mt-6">
					<div class="btnFeedback">+ Add Feedback</div>
				</div>
			</div>
		</main>
	</div>
</template>