<template>
<div id="auth-box">	
     <a @click.prevent="logout">로그아웃 </a>
     <a @click.prevent="widthdrawal"> 회원탈퇴</a>
</div>
</template>
<script>
import axios from "axios"
import {store} from "../../store"
export default{
     methods : {
          logout(){
          alert(`로그아웃클릭`)
               store.state.person = {}
               store.state.authCheck = false
               store.state.sidebar = 'preSidebar'
               this.$router.push({path : '/home'})
     },
          withdrawal(){
               axios
               .delete(`${this.context}/withdrawal/${store.state.person.userid}`)
               .then(
                    store.state.person ={},
                    store.state.authCheck = false,
                    store.state.sidebar = 'preSidebar',
                    this.$router.push({path:'/login'})
               )
               .catch(()=>{
               alert(`탈퇴실패`)
               })
               this.$router.push({path : '/login'})
     }
     }
}
</script>
<style scoped>
</style>