<template>
	<div id="app">
		<div style="line-height: 40px;min-height: 40px;" v-for='(i,$index) in arr'>
			<div style="width: 100%;background: #CCCCCC;padding-left: 10px;box-sizing: border-box;" :class="index==$index?'active':''" @click="btn($index)">{{i.title}}</div>
			<div :style="{height:index==$index?'100px':'0'}" class="item">
				{{i.text}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				index:0,
				arr:[
					{title:'标题一',text:'内容一'},
					{title:'标题二',text:'内容二'},
					{title:'标题三',text:'内容三'}
				]
			}
		},
		methods:{
			btn(a){
				if(this.index==a){
					this.index=-1
				}else{
					this.index=a
				}
			}
		}
	}
</script>

<style>
	*{margin: 0;padding: 0;}
	#app{
		width: 600px;
		height: 300px;
		margin: 0 auto;
	}
	.active{
		color: #FFFFFF;
	}
	.item{
		overflow: hidden;
		transition: 0.35s;
		border: 1px solid #CCCCCC;
	}
</style>
