<template>
	<div>
		<panel-group></panel-group>
		<!-- line chart -->
		<line-chart></line-chart>
		<!-- chart group -->
		<el-row type="flex" justify="space-between" class="chartGroup" :gutter="20">
			<el-col :span="8">
				<radar-chart></radar-chart>
			</el-col>
			<el-col :span="8">
				<pie-chart></pie-chart>
			</el-col>
			<el-col :span="8">
				<histogram-chart></histogram-chart>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import PanelGroup from './PlaneGroup'
import LineChart from './LineChart'
import RadarChart from './RadarChart'
import PieChart from './PieChart'
import HistogramChart from './HistogramChart'
export default {
	name: 'dashboard',
	components: {
		PanelGroup,
		LineChart,
		RadarChart,
		PieChart,
		HistogramChart
	}
}
</script>

<style></style>
