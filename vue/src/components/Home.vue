<template>
	<div id="app">
	<layout>
		<template #header="header">
			<h1>{{header.title}}</h1>
			<component :is="!loginCheck ? 'pre-auth' : 'post-auth'"></component>
		</template>

		<template #sidebar="sidebar">
				<component :is="sidebarCheck"></component>
			</template>

		<template #content="content">
			<router-view/>
			<h3>{{content.title}}</h3>
		</template>
		<template #footer="footer">
		<h2>{{footer.title}}</h2>
		</template>
	</layout>
	</div>
</template>

<script>
import Layout from "@/components/cmm/Layout.vue"
import PreAuth from "@/components/cmm/PreAuth.vue"
import PostAuth from "@/components/cmm/PostAuth.vue"
import ManagerSidebar from "@/components/cmm/ManagerSidebar.vue"
import PreSidebar from "@/components/cmm/PreSidebar.vue"
import StudentSidebar from "@/components/cmm/StudentSidebar.vue"
import {store} from "@/store"
export default{
	components : {Layout, PreAuth, PostAuth,ManagerSidebar, PreSidebar, StudentSidebar},
	data(){
		return {
		}
	},
	computed:{
		loginCheck: function(){
			return store.state.authCheck
		},
		sidebarCheck: function(){
			return store.state.sidebar
		}
		
	}
}
</script>

<style scoped>
ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
    font-style: italic;
}
ul.menu a {
    text-decoration:none;
}
</style>