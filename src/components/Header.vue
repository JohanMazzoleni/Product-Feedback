<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["asideState"]);

function openSideBar() {
	emit("asideState");
};

</script>

<style lang="scss" scoped>
@import "../css/header.scss";
</style>

<template>
	<header class="header">
		<div class="left">
			<h1 class="title">Frontend Mentor</h1>
			<h2 class="subTitle">Feedback Board</h2>
		</div>
		<div class="right">
			<img @click="openSideBar" src="/assets/shared/mobile/icon-hamburger.svg" alt="" class="burgerMenu" />
		</div>
	</header>
</template>