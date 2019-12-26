<template>
  <div class="back">
     <div align = "center"><h1>{{person.name}} 님의 Mypage</h1></div>
      <div class="sub">
        <div class="pull-left rt size" >
           <fieldset style=" margin-top: 1%; height: 31.5%;border: 2px solid black;">
             <legend><h5>비밀번호 : {{person.passwd}} </h5></legend>
           </fieldset>

          <fieldset style="margin-top: 1%; height: 60%;border: 2px solid black;">
              <legend><h3>성적확인</h3></legend>
                <h5>{{person.hak}} 학년</h5>
                <h5>{{person.ban}} 반</h5>
                <h5>{{person.score}} 점</h5>
           </fieldset>
          <!--  <fieldset style="margin-top: 1%; height: 47.5%; border: 2px solid black;">
              <legend><h3>회원탈퇴</h3></legend>
              <a href="#" @click="withdrawal"><h2 align="center">회원탈퇴</h2></a>
            </fieldset> -->
        </div>
        <div class="pull-right size" >
            <fieldset style="border: 2px solid black;">
                <legend><h3>정보보기</h3></legend>
                <div><h2> {{person.name}}</h2></div>
                <div><h2> {{person.userid}}</h2></div>
                <div><h2> {{person.passwd}}</h2></div>
                <div><h2> {{person.birthday}}</h2></div>
                <div><h2> {{person.gender}}</h2></div>
            </fieldset>
            
        </div>
      </div>
    </div>
</template>
<script>
import {store} from "../../store"
export default {
  data(){
    return {
    context : 'http://localhost:8080/',
    name: store.state.name,
    person : store.state.person,
    sidebars :[{menu:"비밀번호 수정",link:"/update"}

    ],
    authCheck : true
    }
  },
  methods : {
     goUpdate(){
       this.$router.push({path:  '/mypageUpdate'}) 
     }
   }
}
</script>
 <style scoped>
    .back {width: 700px; margin: 0 ;}
    .sub {width: 100%; height: 600px; margin: 0 auto; text-align: center;}
    .pull-left {float: left;}
    .pull-right {float: right;}
    .top {margin-top: 1%;}
    .rt {margin-right: 1%;}
    .size {width: 49.5%; height: 100%;}
</style>