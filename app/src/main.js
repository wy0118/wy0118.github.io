import Vue from 'vue'
import app from './app.vue'
require('./index.html')

new Vue({
	el:'#box',
	components:{
		app
	}
})