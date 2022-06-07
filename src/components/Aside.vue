<script setup lang="ts">
import { ref, watch } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const mediumSize = breakpoints.greater("md");

const props = defineProps({
	asideState: Boolean,
});

watch(() => props.asideState, () => {
	asideState.value = !asideState.value;
});

var tagState = ref(0);
var tags = ref(["All", "UI", "UX", "Enhancement", "Bug", "Feature"]);
var roadmap = ref([
	{
		name: "Planned",
		color: "F49F85",
		number: 2,
	},
	{
		name: "In-Progress",
		color: "AD1FEA",
		number: 3,
	},
	{
		name: "Live",
		color: "62BCFA",
		number: 1,
	},
])
var asideState = ref(props.asideState);
</script>

<style lang="scss" scoped>
@import "../css/aside.scss";
</style>

<template>
	<aside :class="{ aside: 1, active: asideState }">
		<div class="websiteName" v-if="mediumSize">
			<h1 class="title">Frontend Mentor</h1>
			<div class="subTitle">Feedback Board</div>
		</div>

		<div class="filter">
			<div :class="{ tags: 1, active: tagState == index }" v-for="(value, index) in tags" :key="index"
				@click="tagState = index">
				{{ value }}
			</div>
		</div>

		<div class="roadmap">
			<div class="head">
				<div class="title">Roadmap</div>
				<router-link to="/" class="view">View</router-link>
			</div>
			<div class="stateList">
				<div class="state" v-for="(value, index) in roadmap" :key="'roadmap_' + index">
					<div class="left">
						<div class="dot" :style="`background-color: #${value.color}`"></div>
						<div class="leftTitle">{{ value.name }}</div>
					</div>
					<div class="right">{{ value.number }}</div>
				</div>
			</div>
		</div>
	</aside>
</template>