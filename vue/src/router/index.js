import Vue from "vue"
import Router from "vue-router"
import Login from "@/components/member/Login"
import Join from "@/components/member/Join"
import Mypage from "@/components/member/Mypage"
import MypageUpdate from "@/components/member/MypageUpdate"
import Admin from "@/components/member/Admin"

import ArticleAdd from '@/components/board/ArticleAdd'
import Articles from "@/components/board/Articles"
import ArticlesFindSome from "@/components/board/ArticlesFindSome"
import ArticleRemoval from "@/components/board/ArticleRemoval"
import ArticleFindOne from "@/components/board/ArticleFindOne"
import ArticleEdit from "@/components/board/ArticleEdit"

import StudentAdd from "@/components/student/StudentAdd"
import StudentEdit from "@/components/student/StudentEdit"
import StudentFindOne from "@/components/student/StudentFindOne"
import StudentRemoval from "@/components/student/StudentRemoval"
import Students from "@/components/student/Students"
import StudentsFindSome from "@/components/student/StudentsFindSome"


Vue.use(Router)

export default new Router({
	mode : 'history',
	routes : [
		{path: '/articleAdd',name: 'articleAdd', component: ArticleAdd},
		{path: '/articleEdit',name: 'articleEdit', component: ArticleEdit},
		{path: '/articleRemoval',name: 'articleRemoval', component: ArticleRemoval},
		{path: '/articleFindOne',name: 'articleFindOne', component: ArticleFindOne},
		{path: '/articles',name: 'articles', component: Articles},
		{path: '/articlesFindSome',name: 'articlesFindSome', component: ArticlesFindSome},
		{path: '/studentAdd',name: 'studentAdd', component: StudentAdd},
		{path: '/studentEdit',name: 'studentEdit', component: StudentEdit},
		{path: '/studentFindOne',name: 'studentFindOne', component: StudentFindOne},
		{path: '/studentRemoval',name: 'studentRemoval', component: StudentRemoval},
		{path: '/students',name: 'students', component: Students},
		{path: '/studentsFindSome',name: 'studentsFindSome', component: StudentsFindSome},
		{path : '/login', name :'login', component : Login },
		{path : '/join', name :'join', component : Join },
		{path : '/mypage', name :'mypage', component : Mypage },
		{path : '/mypageUpdate', name :'mypageUpdate', component : MypageUpdate },
		{path : '/admin', name :'admin', component : Admin },
	]
})