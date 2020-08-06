<template>
	<div id="differ">
		<el-container>
			<el-header height="36px">
				<el-button type="primary" size="medium" class="el-icon-top-left" @click="handleImportButton(0)">
					导入左流程图
					<fileLoader1 class="fileloader" @loadFile="loadBpmnFromFile1" />
				</el-button>
				<el-button type="primary" size="medium" class="el-icon-top-left" @click="handleImportButton(1)">
					导入右流程图
					<fileLoader2 class="fileloader" @loadFile="loadBpmnFromFile2" />
				</el-button>

				<el-button type="primary" size="medium" @click="changeColor"><i class="el-icon-circle-check" /> 检查异同</el-button>
			</el-header>
			<el-main>
				<div class="bpmnContainer">
					<div id="BpmnCanvas1" ref="canvas1"></div>
					<div id="BpmnCanvas2" ref="canvas1"></div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import BpmnModdle from 'bpmn-moddle';
	import Sample from '../bpmn/samples/xmlStr-bpmnSample.js'
	import {
		diff
	} from 'bpmn-js-differ';
	import BpmnViewer from "bpmn-js/lib/NavigatedViewer";

	//文件导入器
	import fileLoader1 from "../components/Editor/fileLoader.vue";
	import fileLoader2 from "../components/Editor/fileLoader2.vue";

	export default {
		name: "Differ",
		data: function() {
			return {
				//过渡模型
				bpmnModdle: new BpmnModdle(),
				//视图模型
				bpmnViewer1: null,
				bpmnViewer2: null,
				//XML保存文件
				bpmnXML1: null,
				bpmnXML2: null,
				//保存两流程图差异信息
				changes: null
			};
		},
		components: {
			fileLoader1: fileLoader1,
			fileLoader2: fileLoader2
		},
		methods: {
			// 初始化函数
			init: function() {
				const _this = this; //promise里的this因为作用域问题用这个变量替代
				//显示差异：（异步函数）
				const promise1 = this.bpmnModdle.fromXML(Sample.Four);
				const promise2 = this.bpmnModdle.fromXML(Sample.Three);

				//读取默认XML文件，并挂载显示
				// 图左的显示
				this.bpmnXML1 = Sample.Three;
				this.bpmnViewer1 = new BpmnViewer({
					container: "#BpmnCanvas1",
				});
				const promise4 = this.bpmnViewer1.importXML(this.bpmnXML1);
				// 图右的显示
				this.bpmnXML2 = Sample.Four;
				this.bpmnViewer2 = new BpmnViewer({
					container: "#BpmnCanvas2"
				});
				const promise3 = this.bpmnViewer2.importXML(this.bpmnXML2);
				Promise.all([promise1, promise2, promise3, promise4]).then(value => {
					var changes = diff(value[0].rootElement, value[1].rootElement);
					console.log("changes", changes);
					_this.changes = changes
					
				});
				
			},
			// 文件导入
			//通过click()点击调用fileLoader组件，该组件不会显示在页面中
			handleImportButton: function(t) {
				console.log(t)
				var element = document.getElementsByClassName("fileloader")[t];
				element.click();
			},
			loadBpmnFromFile1: function(bpmnFile) {

				this.bpmnXML1 = bpmnFile;
				const promise1 = this.bpmnViewer1.importXML(this.bpmnXML1);
				Promise.all([promise1])
			},
			loadBpmnFromFile2: function(bpmnFile) {

				this.bpmnXML2 = bpmnFile;
				const promise2 = this.bpmnViewer2.importXML(this.bpmnXML2);
				Promise.all([promise2])
			},


			//通过设定标签的class属性来更改颜色，因为是Promise，所以拆分成了两个函数
			changeColor: function() {
				const _this = this;
				const promise1 = this.bpmnModdle.fromXML(this.bpmnXML1);
				const promise2 = this.bpmnModdle.fromXML(this.bpmnXML2);
				Promise.all([promise1, promise2]).then(value => {
					var changes = diff(value[0].rootElement, value[1].rootElement);
					_this.changes = changes
					_this.setProperty()
				});
			},
			setProperty: function() {
				const canvas1 = this.bpmnViewer1.get('canvas');
				const canvas2 = this.bpmnViewer2.get('canvas');

				console.log("------added-------");
				for (let e in this.changes._added) {
					// console.log(e,nodes1,nodes2)
					try {
						canvas1.addMarker(e, 'added');
					} catch (e) {}
					try {
						canvas2.addMarker(e, "added");
					} catch (e) {}
				}
				console.log("------removed-------");
				for (let e in this.changes._removed) {
					try {
						canvas1.addMarker(e, 'removed')
					} catch (e) {}
					try {
						canvas2.addMarker(e, "removed")
					} catch (e) {}
				}
				console.log("------changed-------");
				for (let e in this.changes._changed) {
					try {
						canvas1.addMarker(e, 'changed')
					} catch (e) {}
					try {
						canvas2.addMarker(e, 'changed')
					} catch (e) {}
				}
			}

		},
		mounted: function() {
			this.init();
		},


	}
</script>

<style>
	#differ {
		position: fixed;
		margin: auto;
		left: 0px;
		right: 0px;
		bottom: 0px;
		height: 90%;
		width: 100%;
	}

	#differ .el-container {

		height: 100%;
		width: 100%;
	}

	#differ .el-container .el-main {

		height: 100%;
		weight: 100%
	}

	#differ .el-container .el-main .bpmnContainer {
		border: #000 solid 1px;
		height: 100%;
		weight: 100%
	}

	#differ #BpmnCanvas1 {
		width: 50%;
		height: 100%;
		float: left;
		border-right: #000 solid 1px;
		box-sizing: border-box;
	}

	#differ #BpmnCanvas2 {
		width: 50%;
		height: 100%;
		float: left;
	}
	/*定义差异颜色*/
	.added:not(.djs-connection) .djs-visual> :nth-child(1) {
		fill: #FF6666 !important;
		/* 红色 !important表示根据权重显示深浅不同*/
	}

	.changed:not(.djs-connection) .djs-visual> :nth-child(1) {
		fill: #0099CC !important;
		/* color elements as green */
	}

	.removed:not(.djs-connection) .djs-visual> :nth-child(1) {
		fill: #FF6666 !important;
		/* color elements as green */
	}
</style>
