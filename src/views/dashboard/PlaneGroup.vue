<template>
	<!-- panel-group -->
	<el-row class="panel-group" :gutter="20">
		<el-col :span="6">
			<el-card>
				<el-row type="flex" justify="space-between">
					<el-col :span="6">
						<div class="card-panel-icon-wrapper icon-peoples">
							<svg-icon icon-class="peoples" class-name="card-panel-icon"></svg-icon>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="panel-text">访客</div>
						<div class="panel-num">14000</div>
					</el-col>
				</el-row>
			</el-card>
		</el-col>

		<el-col :span="6">
			<el-card>
				<el-row type="flex" justify="space-between">
					<el-col :span="6">
						<div class="card-panel-icon-wrapper icon-message">
							<svg-icon icon-class="message" class-name="card-panel-icon"></svg-icon>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="panel-text">消息</div>
						<div class="panel-num">14000</div>
					</el-col>
				</el-row>
			</el-card>
		</el-col>

		<el-col :span="6">
			<el-card>
				<el-row type="flex" justify="space-between">
					<el-col :span="6">
						<div class="card-panel-icon-wrapper icon-money">
							<svg-icon icon-class="money" class-name="card-panel-icon"></svg-icon>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="panel-text">金额</div>
						<div class="panel-num">14000</div>
					</el-col>
				</el-row>
			</el-card>
		</el-col>

		<el-col :span="6">
			<el-card>
				<el-row type="flex" justify="space-between">
					<el-col :span="6">
						<div class="card-panel-icon-wrapper icon-shopping">
							<svg-icon icon-class="shopping" class-name="card-panel-icon"></svg-icon>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="panel-text">订单</div>
						<div class="panel-num">14000</div>
					</el-col>
				</el-row>
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: 'PanelGroup'
}
</script>

<style lang="less" scoped>
.panel-group {
	margin-bottom: 30px;
	.el-card {
		border: none;
		border-radius: 0px;
		box-shadow: none;
	}
}

.panel-text {
	font-size: 16px;
	color: rgb(0, 0, 0, 0.45);
	margin-bottom: 10px;
	font-weight: bold;
}

.panel-num {
	font-size: 20px;
	color: #666;
}

.lineChart {
	margin-top: 10px;
}

.chartGroup {
	margin-top: 10px;
}

.card-panel-icon {
	font-size: 48px;
	margin: 15px 0px;
}

.card-panel-icon-wrapper {
	text-align: center;
	border-radius: 5%;
}

.el-col {
	cursor: pointer;
	&:hover {
		.card-panel-icon-wrapper {
			color: #fff;
		}
		.icon-peoples {
			background: #40c9c6;
		}
		.icon-message {
			background: #36a3f7;
		}
		.icon-money {
			background: #f4516c;
		}
		.icon-shopping {
			background: #34bfa3;
		}
	}
}
.icon-peoples {
	color: #40c9c6;
}
.icon-message {
	color: #36a3f7;
}
.icon-money {
	color: #f4516c;
}
.icon-shopping {
	color: #34bfa3;
}
</style>
