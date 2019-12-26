<template>
<div>
  <div id="host-header">
        <h1 align = "center">업체 회원 가입</h1>
      </div>
        <fieldset>
        <legend>아이디 입력 </legend>
        <span><input v-model="person.userid" type="text" id="hostId" name="hostId" maxlength="20" value=""></span>
        </fieldset>
        <fieldset>
        <legend>패스워드 입력 </legend>
        <input v-model="person.passwd" type="pw" id="userPw" name="hostPw" maxlength="20" autocomplete="off">
        </fieldset>
        <fieldset>
        <legend>이름 입력 </legend>
        <div><label for="name">이름</label></div>
        <div><input v-model="person.name" type="text" id="hostName" name="hostName" maxlength="20" value=""></div>
        </fieldset>
        <fieldset>
        <legend>샐일 입력 </legend>
        <div><label for="birthday">생일</label></div>
        <div><input v-model="person.birthday" type="text" id="hostbir" name="hostbir" maxlength="20" value=""></div>
        </fieldset>
        <fieldset>
        <legend>성별 </legend>
        <input v-model="person.gender" type="radio" name="gender" value="M" checked>남성
        <input v-model="person.gender" type="radio" name="gender" value="F">여성
        </fieldset>
        <fieldset>
        <legend>학년 </legend>
        <input v-model="person.hak" type="radio" name="hak" value="1" checked>1
        <input v-model="person.hak" type="radio" name="hak" value="2">2
        <input v-model="person.hak" type="radio" name="hak" value="3">3
        <input v-model="person.hak" type="radio" name="hak" value="4">4
        </fieldset>
        <fieldset>
        <legend>반 </legend>
        <input v-model="person.ban" type="radio" name="ban" value="1" checked>1
        <input v-model="person.ban" type="radio" name="ban" value="2">2
        <input v-model="person.ban" type="radio" name="ban" value="3">3
        <input v-model="person.ban" type="radio" name="ban" value="4">4
        </fieldset>
        <fieldset>
        <legend>성적 </legend>
        <input v-model="person.score" type="text" id="score" name="score" maxlength="20" value="">
        </fieldset>
        <fieldset>
        <legend>반 </legend>
        <input v-model="person.role" type="radio" name="ban" value="teacher" checked>teacher
        <input v-model="person.role" type="radio" name="ban" value="manager">manager
        <input v-model="person.role" type="radio" name="ban" value="student">student
        </fieldset>
        <div class="btnfield" style="text-align: center">
            <input type="submit" value="회원가입" @click.prevent="join">
        </div>
</div>
</template>
<script>
import axios from "axios"
import {store} from "../../store"
export default {
      data(){
        return {
            context : 'http://localhost:8080/',
            person : {
              userid : '',
              passwd : '',
              name : '',
              birthday : '',
              gender : '',
              hak : '',
              ban : '',
              score : '',
              role : ''
            }
         }
    },
      methods : {
        join(){
          let url = `${this.context}/join`
          let data = this.person
          let headers = {
              'authorization': 'JWT fefege..',
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            }  
           axios
            .post(url, data, headers)
            .then(res=>{
              if(res.data.result ==="SUCCESS"){
                store.state.userid = res.data.person.userid
                store.state.passwd = res.data.person.passwd
                store.state.name = res.data.person.name
                store.state.birthday = res.data.person.birthday
                store.state.id = res.data.person.id
                alert(`가입 성공 `);
                this.$router.push({path:  '/login'})   
              }else{
                alert(`로그인 실패 `);                
                this.$router.push({path:  '/join'})                        
              }
            })
            .catch(()=>{
                alert('AXIOS 실패')
            })
        }
    }
}
</script>
<style scoped>

</style>