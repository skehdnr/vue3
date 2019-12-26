<template>
  <div class="back">
     <div align = "center"><h1>{{person.name}} 님의 Mypage</h1><h3 @click="logout">로그아웃</h3></div>
      <div class="sub">
        <div class="pull-left rt size" >
           <fieldset style=" margin-top: 1%; height: 31.5%;border: 2px solid black;">
             <legend><h3>비밀번호 변경</h3></legend>
                <input type="text" name="pwd" size="20" placeholder="변경할 비밀번호 입력" style="float: none; width: 70%;">
                <button style="height: 38%; width: 20%; float: right;">수정</button><br/><br/>
           </fieldset>

          <fieldset style="margin-top: 1%; height: 60%;border: 2px solid black;">
              <legend><h3>학생부 관리</h3></legend>
                <input type="text" name="pwd" size="20" placeholder="변경할 학년  입력" v-model="person.hak" style="float: none;width: 70%;">학년
                <input type="text" name="pwd" size="20" placeholder="변경할 반 입력" v-model="person.ban"  style="float: none;width: 70%;">반
                <input type="text" name="pwd" size="20" placeholder="변경할 성적 입력" v-model="person.score"   style="float: none;width: 70%;">점
                <br/><br/>
                <button style="height: 10%; width: 100%; float: none;" @click.prevent="modify">수정</button>
           </fieldset>
          <!--  <fieldset style="margin-top: 1%; height: 47.5%; border: 2px solid black;">
              <legend><h3>회원탈퇴</h3></legend>
              <a href="#" @click="withdrawal"><h2 align="center">회원탈퇴</h2></a>
            </fieldset> -->
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
    sidebars: [
				{menu:"학생등록",link:"/write"},
				{menu:"학생목록",link:"/list"},
				{menu:"학생정보수정",link:"/update"},
				{menu:"학생정보삭제",link:"/remove"},
				{menu:"학생검색",link:"/search"}
      ],
      authCheck : true
		}
		
	},
  methods : {
     
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