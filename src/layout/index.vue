<template>
	<section>
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</section>
</template>

<script>
export default {
	created() {
		this.log()
	},
	methods: {
		log() {
			console.log(123)
		}
	}
}
</script>

<style>
section {
	width: 100%;
	height: 800px;
}
</style>
