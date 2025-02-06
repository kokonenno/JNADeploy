webpackJsonp([0],{"04VD":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),o=n("woOf"),i=n.n(o),r=n("8Q2T"),c=n("NYxO"),l=n("oAV5"),u=n("26Oo"),d=n("2hfY"),m=n("FN8c"),h={name:"contest-list",components:{Pagination:u.a},data:function(){return{page:1,query:{status:"",keyword:"",rule_type:""},limit:10,total:0,rows:"",contests:[],CONTEST_STATUS_REVERSE:m.b,cur_contest_id:""}},beforeRouteEnter:function(t,e,n){r.a.getContestList(0,10).then(function(t){n(function(e){e.contests=t.data.data.results,e.total=t.data.data.total})},function(t){n()})},methods:{init:function(){var t=this.$route.query;this.query.status=t.status||"",this.query.rule_type=t.rule_type||"",this.query.keyword=t.keyword||"",this.page=parseInt(t.page)||1,this.limit=parseInt(t.limit)||10,this.getContestList(this.page)},getContestList:function(){var t=this,e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)-1)*this.limit;r.a.getContestList(e,this.limit,this.query).then(function(e){t.contests=e.data.data.results,t.total=e.data.data.total})},changeRoute:function(){var t=i()({},this.query);t.page=this.page,t.limit=this.limit,this.$router.push({name:"contest-list",query:l.a.filterEmptyValue(t)})},onRuleChange:function(t){this.query.rule_type=t,this.page=1,this.changeRoute()},onStatusChange:function(t){this.query.status=t,this.page=1,this.changeRoute()},goContest:function(t){this.cur_contest_id=t.id,t.contest_type===m.c.PUBLIC||this.isAuthenticated?this.$router.push({name:"contest-details",params:{contestID:t.id}}):(this.$error(this.$i18n.t("m.Please_login_first")),this.$store.dispatch("changeModalStatus",{visible:!0}))},getDuration:function(t,e){return d.a.duration(t,e)}},computed:a()({},Object(c.mapGetters)(["isAuthenticated","user"])),watch:{$route:function(t,e){t!==e&&this.init()}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{attrs:{type:"flex"}},[s("Col",{attrs:{span:24}},[s("Panel",{attrs:{id:"contest-card",shadow:""}},[s("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(""===t.query.rule_type?this.$i18n.t("m.All"):t.query.rule_type)+" "+t._s(t.$t("m.Contests")))]),t._v(" "),s("div",{attrs:{slot:"extra"},slot:"extra"},[s("ul",{staticClass:"filter"},[s("li",[s("Dropdown",{on:{"on-click":t.onRuleChange}},[s("span",[t._v(t._s(""===t.query.rule_type?this.$i18n.t("m.Rule"):this.$i18n.t("m."+t.query.rule_type))+"\n              "),s("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),s("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},[s("Dropdown-item",{attrs:{name:""}},[t._v(t._s(t.$t("m.All")))]),t._v(" "),s("Dropdown-item",{attrs:{name:"OI"}},[t._v(t._s(t.$t("m.OI")))]),t._v(" "),s("Dropdown-item",{attrs:{name:"ACM"}},[t._v(t._s(t.$t("m.ACM")))])],1)],1)],1),t._v(" "),s("li",[s("Dropdown",{on:{"on-click":t.onStatusChange}},[s("span",[t._v(t._s(""===t.query.status?this.$i18n.t("m.Status"):this.$i18n.t("m."+t.CONTEST_STATUS_REVERSE[t.query.status].name.replace(/ /g,"_")))+"\n              "),s("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),s("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},[s("Dropdown-item",{attrs:{name:""}},[t._v(t._s(t.$t("m.All")))]),t._v(" "),s("Dropdown-item",{attrs:{name:"0"}},[t._v(t._s(t.$t("m.Underway")))]),t._v(" "),s("Dropdown-item",{attrs:{name:"1"}},[t._v(t._s(t.$t("m.Not_Started")))]),t._v(" "),s("Dropdown-item",{attrs:{name:"-1"}},[t._v(t._s(t.$t("m.Ended")))])],1)],1)],1),t._v(" "),s("li",[s("Input",{attrs:{id:"keyword",icon:"ios-search-strong",placeholder:"Keyword"},on:{"on-enter":t.changeRoute,"on-click":t.changeRoute},model:{value:t.query.keyword,callback:function(e){t.$set(t.query,"keyword",e)},expression:"query.keyword"}})],1)])]),t._v(" "),0==t.contests.length?s("p",{attrs:{id:"no-contest"}},[t._v(t._s(t.$t("m.No_contest")))]):t._e(),t._v(" "),s("ol",{attrs:{id:"contest-list"}},t._l(t.contests,function(e){return s("li",{key:e.title},[s("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("img",{staticClass:"trophy",attrs:{src:n("uZQl")}}),t._v(" "),s("Col",{staticClass:"contest-main",attrs:{span:18}},[s("p",{staticClass:"title"},[s("a",{staticClass:"entry",on:{click:function(n){return n.stopPropagation(),t.goContest(e)}}},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),"Public"!=e.contest_type?[s("Icon",{attrs:{type:"ios-locked-outline",size:"20"}})]:t._e()],2),t._v(" "),s("ul",{staticClass:"detail"},[s("li",[s("Icon",{attrs:{type:"calendar",color:"#3091f2"}}),t._v("\n              "+t._s(t._f("localtime")(e.start_time,"YYYY-M-D HH:mm"))+"\n            ")],1),t._v(" "),s("li",[s("Icon",{attrs:{type:"android-time",color:"#3091f2"}}),t._v("\n              "+t._s(t.getDuration(e.start_time,e.end_time))+"\n            ")],1),t._v(" "),s("li",[s("Button",{attrs:{size:"small",shape:"circle"},on:{click:function(n){return t.onRuleChange(e.rule_type)}}},[t._v("\n                "+t._s(e.rule_type)+"\n              ")])],1)])]),t._v(" "),s("Col",{staticStyle:{"text-align":"center"},attrs:{span:4}},[s("Tag",{attrs:{type:"dot",color:t.CONTEST_STATUS_REVERSE[e.status].color}},[t._v(t._s(t.$t("m."+t.CONTEST_STATUS_REVERSE[e.status].name.replace(/ /g,"_"))))])],1)],1)],1)}),0)]),t._v(" "),s("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":!0},on:{"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e},"on-change":t.changeRoute,"update:current":function(e){t.page=e},"on-page-size-change":t.changeRoute}})],1)],1)},staticRenderFns:[]};var f=n("VU/8")(h,p,!1,function(t){n("9NxQ")},"data-v-bea65ec8",null);e.default=f.exports},"4dQa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),o=n("PJh5"),i=n.n(o),r=n("8Q2T"),c=n("NYxO"),l=n("IcnI"),u=n("FN8c"),d=n("2hfY"),m={name:"ContestDetail",components:{},data:function(){var t=this;return{CONTEST_STATUS:u.a,route_name:"",btnLoading:!1,contestID:"",contestPassword:"",columns:[{title:this.$i18n.t("m.StartAt"),render:function(t,e){return t("span",d.a.utcToLocal(e.row.start_time))}},{title:this.$i18n.t("m.EndAt"),render:function(t,e){return t("span",d.a.utcToLocal(e.row.end_time))}},{title:this.$i18n.t("m.ContestType"),render:function(e,n){return e("span",t.$i18n.t(n.row.contest_type.replace(" ","_")))}},{title:this.$i18n.t("m.Rule"),render:function(e,n){return e("span",t.$i18n.t("m."+n.row.rule_type))}},{title:this.$i18n.t("m.Creator"),render:function(t,e){return t("span",e.row.created_by.username)}}]}},mounted:function(){var t=this;this.contestID=this.$route.params.contestID,this.route_name=this.$route.name,this.$store.dispatch("getContest").then(function(e){t.changeDomTitle({title:e.data.data.title});var n=e.data.data;i()(n.end_time).isAfter(i()(n.now))&&(t.timer=setInterval(function(){t.$store.commit(l.b.NOW_ADD_1S)},1e3))})},methods:a()({},Object(c.mapActions)(["changeDomTitle"]),{handleRoute:function(t){this.$router.push(t)},checkPassword:function(){var t=this;""!==this.contestPassword?(this.btnLoading=!0,r.a.checkContestPassword(this.contestID,this.contestPassword).then(function(e){t.$success("Succeeded"),t.$store.commit(l.b.CONTEST_ACCESS,{access:!0}),t.btnLoading=!1},function(e){t.btnLoading=!1})):this.$error("Password can't be empty")}}),computed:a()({},Object(c.mapState)({showMenu:function(t){return t.contest.itemVisible.menu},contest:function(t){return t.contest.contest},contest_table:function(t){return[t.contest.contest]},now:function(t){return t.contest.now}}),Object(c.mapGetters)(["contestMenuDisabled","contestRuleType","contestStatus","countdown","isContestAdmin","OIContestRealTimePermission","passwordFormVisible"]),{countdownColor:function(){if(this.contestStatus)return u.b[this.contestStatus].color},showAdminHelper:function(){return this.isContestAdmin&&"ACM"===this.contestRuleType}}),watch:{$route:function(t){this.route_name=t.name,this.contestID=t.params.contestID,this.changeDomTitle({title:this.contest.title})}},beforeDestroy:function(){clearInterval(this.timer),this.$store.commit(l.b.CLEAR_CONTEST)}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container"},[n("div",{attrs:{id:"contest-main"}},[n("transition",{attrs:{name:"fadeInUp"}},[n("router-view")],1),t._v(" "),"contest-details"===t.route_name?n("div",{staticClass:"flex-container"},[[n("div",{attrs:{id:"contest-desc"}},[n("Panel",{attrs:{padding:20,shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n              "+t._s(t.contest.title)+"\n            ")]),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("Tag",{attrs:{type:"dot",color:t.countdownColor}},[n("span",{attrs:{id:"countdown"}},[t._v(t._s(t.countdown))])])],1),t._v(" "),n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.contest.description)}}),t._v(" "),t.passwordFormVisible?n("div",{staticClass:"contest-password"},[n("Input",{staticClass:"contest-password-input",attrs:{type:"password",placeholder:"contest password"},on:{"on-enter":t.checkPassword},model:{value:t.contestPassword,callback:function(e){t.contestPassword=e},expression:"contestPassword"}}),t._v(" "),n("Button",{attrs:{type:"info"},on:{click:t.checkPassword}},[t._v("Enter")])],1):t._e()]),t._v(" "),n("Table",{staticStyle:{"margin-bottom":"40px"},attrs:{columns:t.columns,data:t.contest_table,"disabled-hover":""}})],1)]],2):t._e()],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],attrs:{id:"contest-menu"}},[n("VerticalMenu",{on:{"on-click":t.handleRoute}},[n("VerticalMenu-item",{attrs:{route:{name:"contest-details",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"home"}}),t._v("\n        "+t._s(t.$t("m.Overview"))+"\n      ")],1),t._v(" "),n("VerticalMenu-item",{attrs:{disabled:t.contestMenuDisabled,route:{name:"contest-announcement-list",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"chatbubble-working"}}),t._v("\n        "+t._s(t.$t("m.Announcements"))+"\n      ")],1),t._v(" "),n("VerticalMenu-item",{attrs:{disabled:t.contestMenuDisabled,route:{name:"contest-problem-list",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"ios-photos"}}),t._v("\n        "+t._s(t.$t("m.Problems"))+"\n      ")],1),t._v(" "),t.OIContestRealTimePermission?n("VerticalMenu-item",{attrs:{disabled:t.contestMenuDisabled,route:{name:"contest-submission-list"}}},[n("Icon",{attrs:{type:"navicon-round"}}),t._v("\n        "+t._s(t.$t("m.Submissions"))+"\n      ")],1):t._e(),t._v(" "),t.OIContestRealTimePermission?n("VerticalMenu-item",{attrs:{disabled:t.contestMenuDisabled,route:{name:"contest-rank",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"stats-bars"}}),t._v("\n        "+t._s(t.$t("m.Rankings"))+"\n      ")],1):t._e(),t._v(" "),t.showAdminHelper?n("VerticalMenu-item",{attrs:{route:{name:"acm-helper",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"ios-paw"}}),t._v("\n        "+t._s(t.$t("m.Admin_Helper"))+"\n      ")],1):t._e()],1)],1)])},staticRenderFns:[]};var p=n("VU/8")(m,h,!1,function(t){n("xJyt")},"data-v-2338a5d6",null);e.default=p.exports},"5PlU":function(t,e,n){var s=n("RY/4"),a=n("dSzd")("iterator"),o=n("/bQp");t.exports=n("FeBl").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||o.hasOwnProperty(s(e))}},"9NxQ":function(t,e){},BoGV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),o=n("NYxO"),i={name:"ContestProblemList",mixins:[n("y2MC").b],data:function(){var t=this;return{ACMTableColumns:[{title:"#",key:"_id",sortType:"asc",width:150},{title:this.$i18n.t("m.Title"),key:"title"},{title:this.$i18n.t("m.Total"),key:"submission_number"},{title:this.$i18n.t("m.AC_Rate"),render:function(e,n){return e("span",t.getACRate(n.row.accepted_number,n.row.submission_number))}}],OITableColumns:[{title:"#",key:"_id",width:150},{title:this.$i18n.t("m.Title"),key:"title"}]}},mounted:function(){this.getContestProblems()},methods:{getContestProblems:function(){var t=this;this.$store.dispatch("getContestProblems").then(function(e){t.isAuthenticated&&("ACM"===t.contestRuleType?t.addStatusColumn(t.ACMTableColumns,e.data.data):t.OIContestRealTimePermission&&t.addStatusColumn(t.ACMTableColumns,e.data.data))})},goContestProblem:function(t){this.$router.push({name:"contest-problem-details",params:{contestID:this.$route.params.contestID,problemID:t._id}})}},computed:a()({},Object(o.mapState)({problems:function(t){return t.contest.contestProblems}}),Object(o.mapGetters)(["isAuthenticated","contestRuleType","OIContestRealTimePermission"]))},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Panel",[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("m.Problems_List")))]),t._v(" "),"ACM"==t.contestRuleType||t.OIContestRealTimePermission?n("Table",{attrs:{columns:t.ACMTableColumns,data:t.problems,"no-data-text":t.$t("m.No_Problems")},on:{"on-row-click":t.goContestProblem}}):n("Table",{attrs:{data:t.problems,columns:t.OITableColumns,"no-data-text":"$t('m.No_Problems')"},on:{"on-row-click":t.goContestProblem}})],1)],1)},staticRenderFns:[]};var c=n("VU/8")(i,r,!1,function(t){n("uPiC")},"data-v-37737398",null);e.default=c.exports},H40m:function(t,e){},HAQa:function(t,e){},NKMc:function(t,e){},Xd32:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("5PlU")},"cVp+":function(t,e){},d7EF:function(t,e,n){"use strict";e.__esModule=!0;var s=o(n("us/S")),a=o(n("BO1k"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,s.default)(Object(t)))return function(t,e){var n=[],s=!0,o=!1,i=void 0;try{for(var r,c=(0,a.default)(t);!(s=(r=c.next()).done)&&(n.push(r.value),!e||n.length!==e);s=!0);}catch(t){o=!0,i=t}finally{try{!s&&c.return&&c.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},uPiC:function(t,e){},uZQl:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTVDMzVBQTRBNjYzMTFFNEIxQzhCNjUwRDA0MEJFRDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTVDMzVBQTVBNjYzMTFFNEIxQzhCNjUwRDA0MEJFRDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNUMzNUFBMkE2NjMxMUU0QjFDOEI2NTBEMDQwQkVEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNUMzNUFBM0E2NjMxMUU0QjFDOEI2NTBEMDQwQkVEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi2kbbcAAAZuSURBVHja7FtvaBxF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"},"us/S":function(t,e,n){t.exports={default:n("Xd32"),__esModule:!0}},vi5v:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),o=n("NYxO"),i=n("IcnI"),r=n("mvHQ"),c=n.n(r),l=n("BO1k"),u=n.n(l),d=n("d7EF"),m=n.n(d),h=n("fZjL"),p=n.n(h),f=n("PJh5"),_=n.n(f),v=n("26Oo"),g=n("8Q2T"),w=n("95TO"),b=n("FN8c"),C={components:{ScreenFull:w.a},methods:{getContestRankData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=(e-1)*this.limit;this.showChart&&!n&&this.$refs.chart.showLoading({maskColor:"rgba(250, 250, 250, 0.8)"});var a={offset:s,limit:this.limit,contest_id:this.$route.params.contestID,force_refresh:this.forceUpdate?"1":"0"};g.a.getContestRank(a).then(function(s){t.showChart&&!n&&t.$refs.chart.hideLoading(),t.total=s.data.data.total,1===e&&t.applyToChart(s.data.data.results.slice(0,10)),t.applyToTable(s.data.data.results)})},handleAutoRefresh:function(t){var e=this;!0===t?this.refreshFunc=setInterval(function(){e.page=1,e.getContestRankData(1,!0)},1e4):clearInterval(this.refreshFunc)}},computed:a()({},Object(o.mapGetters)(["isContestAdmin"]),Object(o.mapState)({contest:function(t){return t.contest.contest},contestProblems:function(t){return t.contest.contestProblems}}),{showChart:{get:function(){return this.$store.state.contest.itemVisible.chart},set:function(t){this.$store.commit(i.b.CHANGE_CONTEST_ITEM_VISIBLE,{chart:t})}},showMenu:{get:function(){return this.$store.state.contest.itemVisible.menu},set:function(t){var e=this;this.$store.commit(i.b.CHANGE_CONTEST_ITEM_VISIBLE,{menu:t}),this.$nextTick(function(){e.showChart&&e.$refs.chart.resize(),e.$refs.tableRank.handleResize()})}},showRealName:{get:function(){return this.$store.state.contest.itemVisible.realName},set:function(t){this.$store.commit(i.b.CHANGE_CONTEST_ITEM_VISIBLE,{realName:t}),t?this.columns.splice(2,0,{title:"RealName",align:"center",width:150,render:function(t,e){return t("span",e.row.user.real_name)}}):this.columns.splice(2,1)}},forceUpdate:{get:function(){return this.$store.state.contest.forceUpdate},set:function(t){this.$store.commit(i.b.CHANGE_RANK_FORCE_UPDATE,{value:t})}},limit:{get:function(){return this.$store.state.contest.rankLimit},set:function(t){this.$store.commit(i.b.CHANGE_CONTEST_RANK_LIMIT,{rankLimit:t})}},refreshDisabled:function(){return this.contest.status===b.a.ENDED}}),beforeDestroy:function(){clearInterval(this.refreshFunc)}},y=n("2hfY"),A=n("oAV5"),I={name:"acm-contest-rank",components:{Pagination:v.a},mixins:[C],data:function(){var t=this;return{total:0,page:1,contestID:"",columns:[{align:"center",width:50,fixed:"left",render:function(e,n){return e("span",{},n.index+(t.page-1)*t.limit+1)}},{title:this.$i18n.t("m.User_User"),align:"center",fixed:"left",width:150,render:function(e,n){return e("a",{style:{display:"inline-block","max-width":"150px"},on:{click:function(){t.$router.push({name:"user-home",query:{username:n.row.user.username}})}}},n.row.user.username)}},{title:"AC / "+this.$i18n.t("m.Total"),align:"center",width:100,render:function(e,n){return e("span",{},[e("span",{},n.row.accepted_number+" / "),e("a",{on:{click:function(){t.$router.push({name:"contest-submission-list",query:{username:n.row.user.username}})}}},n.row.submission_number)])}},{title:this.$i18n.t("m.TotalTime"),align:"center",width:100,render:function(e,n){return e("span",t.parseTotalTime(n.row.total_time))}}],dataRank:[],options:{title:{text:this.$i18n.t("m.Top_10_Teams"),left:"center"},dataZoom:[{type:"inside",filterMode:"none",xAxisIndex:[0],start:0,end:100}],toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:this.$i18n.t("m.save_as_image")}},right:"5%"},tooltip:{trigger:"axis",axisPointer:{type:"cross",axis:"x"}},legend:{orient:"vertical",y:"center",right:0,data:[],formatter:function(t){return A.a.breakLongWords(t,16)},textStyle:{fontSize:12}},grid:{x:80,x2:200},xAxis:[{type:"time",splitLine:!1,axisPointer:{show:!0,snap:!0}}],yAxis:[{type:"category",boundaryGap:!1,data:[0]}],series:[]}}},mounted:function(){var t=this;this.contestID=this.$route.params.contestID,this.getContestRankData(1),0===this.contestProblems.length?this.getContestProblems().then(function(e){t.addTableColumns(e.data.data),t.addChartCategory(e.data.data)}):(this.addTableColumns(this.contestProblems),this.addChartCategory(this.contestProblems))},methods:a()({},Object(o.mapActions)(["getContestProblems"]),{addChartCategory:function(t){for(var e=[],n=0;n<=t.length;++n)e.push(n);this.options.yAxis[0].data=e},applyToChart:function(t){var e=this,n=[],s=[];t.forEach(function(t){n.push(t.user.username);var a=t.submission_info,o=[];p()(a).forEach(function(t){a[t].is_ac&&o.push(a[t].ac_time)}),o.sort(function(t,e){return t-e});var i=[];i.push([e.contest.start_time,0]);var r=!0,c=!1,l=void 0;try{for(var d,h=u()(o.entries());!(r=(d=h.next()).done);r=!0){var f=d.value,v=m()(f,2),g=v[0],w=v[1],b=_()(e.contest.start_time).add(w,"seconds").format();i.push([b,g+1])}}catch(t){c=!0,l=t}finally{try{!r&&h.return&&h.return()}finally{if(c)throw l}}s.push({name:t.user.username,type:"line",data:i})}),this.options.legend.data=n,this.options.series=s},applyToTable:function(t){var e=JSON.parse(c()(t));e.forEach(function(t,n){var s=t.submission_info,a={};p()(s).forEach(function(t){e[n][t]=s[t],e[n][t].ac_time=y.a.secondFormat(e[n][t].ac_time);var o=s[t];o.is_first_ac?a[t]="first-ac":o.is_ac?a[t]="ac":a[t]="wa"}),e[n].cellClassName=a}),this.dataRank=e},addTableColumns:function(t){var e=this;t.forEach(function(n){e.columns.push({align:"center",key:n.id,width:t.length>15?80:null,renderHeader:function(t,s){return t("a",{class:{emphasis:!0},on:{click:function(){e.$router.push({name:"contest-problem-details",params:{contestID:e.contestID,problemID:n._id}})}}},n._id)},render:function(t,e){if(e.row[n.id]){var s=e.row[n.id],a=void 0,o=void 0;return s.is_ac&&(a=t("span",s.ac_time)),0!==s.error_number&&(o=t("p","(-"+s.error_number+")")),t("div",[a,o])}}})})},parseTotalTime:function(t){var e=_.a.duration(t,"s");return[Math.floor(e.asHours()),e.minutes(),e.seconds()].join(":")},downloadRankCSV:function(){A.a.downloadFile("contest_rank?download_csv=1&contest_id="+this.$route.params.contestID+"&force_refrash="+(this.forceUpdate?"1":"0"))}})},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.contest.title))]),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("screen-full",{staticClass:"screen-full",attrs:{height:18,width:18}}),t._v(" "),n("Poptip",{attrs:{trigger:"hover",placement:"left-start"}},[n("Icon",{attrs:{type:"android-settings",size:"20"}}),t._v(" "),n("div",{attrs:{slot:"content",id:"switches"},slot:"content"},[n("p",[n("span",[t._v(t._s(t.$t("m.Menu")))]),t._v(" "),n("i-switch",{model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}}),t._v(" "),n("span",[t._v(t._s(t.$t("m.Chart")))]),t._v(" "),n("i-switch",{model:{value:t.showChart,callback:function(e){t.showChart=e},expression:"showChart"}})],1),t._v(" "),n("p",[n("span",[t._v(t._s(t.$t("m.Auto_Refresh"))+"(10s)")]),t._v(" "),n("i-switch",{attrs:{disabled:t.refreshDisabled},on:{"on-change":t.handleAutoRefresh}})],1),t._v(" "),t.isContestAdmin?[n("p",[n("span",[t._v(t._s(t.$t("m.RealName")))]),t._v(" "),n("i-switch",{model:{value:t.showRealName,callback:function(e){t.showRealName=e},expression:"showRealName"}})],1),t._v(" "),n("p",[n("span",[t._v(t._s(t.$t("m.Force_Update")))]),t._v(" "),n("i-switch",{attrs:{disabled:t.refreshDisabled},model:{value:t.forceUpdate,callback:function(e){t.forceUpdate=e},expression:"forceUpdate"}})],1)]:t._e(),t._v(" "),[n("Button",{attrs:{type:"primary",size:"small"},on:{click:t.downloadRankCSV}},[t._v(t._s(t.$t("m.download_csv")))])]],2)],1)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showChart,expression:"showChart"}],staticClass:"echarts"},[n("ECharts",{ref:"chart",attrs:{options:t.options,"auto-resize":""}})],1),t._v(" "),n("Table",{ref:"tableRank",attrs:{columns:t.columns,data:t.dataRank,"disabled-hover":"",height:"600"}}),t._v(" "),n("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":""},on:{"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.getContestRankData,"on-page-size-change":function(e){return t.getContestRankData(1)}}})],1)},staticRenderFns:[]};var T=n("VU/8")(I,R,!1,function(t){n("H40m")},"data-v-6a2e4af0",null).exports,k={name:"acm-contest-rank",components:{Pagination:v.a},mixins:[C],data:function(){var t=this;return{total:0,page:1,contestID:"",columns:[{align:"center",width:60,render:function(e,n){return e("span",{},n.index+(t.page-1)*t.limit+1)}},{title:this.$i18n.t("m.User_User"),align:"center",render:function(e,n){return e("a",{style:{display:"inline-block","max-width":"150px"},on:{click:function(){t.$router.push({name:"user-home",query:{username:n.row.user.username}})}}},n.row.user.username)}},{title:this.$i18n.t("m.Total_Score"),align:"center",render:function(e,n){return e("a",{on:{click:function(){t.$router.push({name:"contest-submission-list",query:{username:n.row.user.username}})}}},n.row.total_score)}}],dataRank:[],options:{title:{text:this.$i18n.t("m.Top_10_Teams"),left:"center"},tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["line","bar"]},saveAsImage:{show:!0}},right:"10%"},calculable:!0,xAxis:[{type:"category",data:["root"],boundaryGap:!0,axisLabel:{interval:0,showMinLabel:!0,showMaxLabel:!0,align:"center",formatter:function(t,e){return A.a.breakLongWords(t,14)}},axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:this.$i18n.t("m.Score"),type:"bar",barMaxWidth:"80",data:[0],markPoint:{data:[{type:"max",name:"max"}]}}]}}},mounted:function(){var t=this;this.contestID=this.$route.params.contestID,this.getContestRankData(1),0===this.contestProblems.length?this.getContestProblems().then(function(e){t.addTableColumns(e.data.data)}):this.addTableColumns(this.contestProblems)},methods:a()({},Object(o.mapActions)(["getContestProblems"]),{applyToChart:function(t){var e=[],n=[];t.forEach(function(t){e.push(t.user.username),n.push(t.total_score)}),this.options.xAxis[0].data=e,this.options.series[0].data=n},applyToTable:function(t){var e=JSON.parse(c()(t));e.forEach(function(t,n){var s=t.submission_info;p()(s).forEach(function(t){e[n][t]=s[t]})}),this.dataRank=e},addTableColumns:function(t){var e=this;t.forEach(function(t){e.columns.push({align:"center",key:t.id,renderHeader:function(n,s){return n("a",{class:{emphasis:!0},on:{click:function(){e.$router.push({name:"contest-problem-details",params:{contestID:e.contestID,problemID:t._id}})}}},t._id)},render:function(e,n){return e("span",n.row[t.id])}})})},downloadRankCSV:function(){A.a.downloadFile("contest_rank?download_csv=1&contest_id="+this.$route.params.contestID+"&force_refrash="+(this.forceUpdate?"1":"0"))}})},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.contest.title))]),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("screen-full",{staticClass:"screen-full",attrs:{height:18,width:18}}),t._v(" "),n("Poptip",{attrs:{trigger:"hover",placement:"left-start"}},[n("Icon",{attrs:{type:"android-settings",size:"20"}}),t._v(" "),n("div",{attrs:{slot:"content",id:"switches"},slot:"content"},[n("p",[n("span",[t._v(t._s(t.$t("m.Menu")))]),t._v(" "),n("i-switch",{model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}}),t._v(" "),n("span",[t._v(t._s(t.$t("m.Chart")))]),t._v(" "),n("i-switch",{model:{value:t.showChart,callback:function(e){t.showChart=e},expression:"showChart"}})],1),t._v(" "),n("p",[n("span",[t._v(t._s(t.$t("m.Auto_Refresh"))+"(10s)")]),t._v(" "),n("i-switch",{attrs:{disabled:t.refreshDisabled},on:{"on-change":t.handleAutoRefresh}})],1),t._v(" "),t.isContestAdmin?n("p",[n("span",[t._v(t._s(t.$t("m.RealName")))]),t._v(" "),n("i-switch",{model:{value:t.showRealName,callback:function(e){t.showRealName=e},expression:"showRealName"}})],1):t._e(),t._v(" "),n("p",[n("Button",{attrs:{type:"primary",size:"small"},on:{click:t.downloadRankCSV}},[t._v(t._s(t.$t("m.download_csv")))])],1)])],1)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showChart,expression:"showChart"}],staticClass:"echarts"},[n("ECharts",{ref:"chart",attrs:{options:t.options,"auto-resize":""}})],1),t._v(" "),n("Table",{ref:"tableRank",staticClass:"auto-resize",attrs:{columns:t.columns,data:t.dataRank,"disabled-hover":""}}),t._v(" "),n("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":""},on:{"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.getContestRankData,"on-page-size-change":function(e){return t.getContestRankData(1)}}})],1)},staticRenderFns:[]};var x={name:"contest-rank",components:{ACMContestRank:T,OIContestRank:n("VU/8")(k,D,!1,function(t){n("cVp+")},"data-v-72082334",null).exports,NullComponent:{name:"null-component",template:"<div></div>"}},computed:a()({},Object(o.mapGetters)(["contestRuleType"]),{currentView:function(){return null===this.contestRuleType?"NullComponent":"ACM"===this.contestRuleType?"ACMContestRank":"OIContestRank"}}),beforeRouteLeave:function(t,e,n){this.$store.commit(i.b.CHANGE_CONTEST_ITEM_VISIBLE,{menu:!0}),n()}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.currentView,{tag:"component"})],1)},staticRenderFns:[]};var N=n("VU/8")(x,P,!1,function(t){n("HAQa")},"data-v-7b123b58",null);e.default=N.exports},xJyt:function(t,e){},zVEN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("BO1k"),a=n.n(s),o=n("Dd8w"),i=n.n(o),r=n("NYxO"),c=n("IcnI"),l=n("PJh5"),u=n.n(l),d=n("26Oo"),m=n("8Q2T"),h={name:"acm-helper",components:{Pagination:d.a},data:function(){var t=this;return{page:1,total:0,loadingTable:!1,columns:[{title:this.$i18n.t("m.AC_Time"),key:"ac_time"},{title:this.$i18n.t("m.ProblemID"),align:"center",key:"problem_display_id"},{title:this.$i18n.t("m.First_Blood"),align:"center",render:function(e,n){return n.row.ac_info.is_first_ac?e("Tag",{props:{color:"red"}},t.$i18n.t("m.First_Blood")):e("span","----")}},{title:this.$i18n.t("m.Username"),align:"center",render:function(e,n){var s=n.row;return e("a",{style:{display:"inline-block","max-width":"150px"},on:{click:function(){t.$router.push({name:"contest-submission-list",query:{username:s.username}})}}},s.username)}},{title:this.$i18n.t("m.RealName"),align:"center",render:function(t,e){return t("span",{style:{display:"inline-block","max-width":"150px"}},e.row.real_name)}},{title:this.$i18n.t("m.Status"),align:"center",render:function(e,n){var s=n.row;return e("Tag",{props:{color:s.checked?"green":"yellow"}},s.checked?t.$i18n.t("m.Checked"):t.$i18n.t("m.Not_Checked"))}},{title:this.$i18n.t("m.Option"),fixed:"right",align:"center",width:100,render:function(e,n){var s=n.row;return e("Button",{props:{type:"ghost",size:"small",icon:"checkmark",disabled:s.checked},on:{click:function(){t.updateCheckedStatus(s)}}},t.$i18n.t("m.Check_It"))}}],acInfo:[],pagedAcInfo:[],problemsMap:[]}},mounted:function(){var t=this;this.contestID=this.$route.params.contestID,0===this.contestProblems.length?this.getContestProblems().then(function(e){t.mapProblemDisplayID(),t.getACInfo()}):(this.mapProblemDisplayID(),this.getACInfo())},methods:i()({},Object(r.mapActions)(["getContestProblems"]),{mapProblemDisplayID:function(){var t={};this.contestProblems.forEach(function(e){t[e.id]=e._id}),this.problemsMap=t},getACInfo:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loadingTable=!0;var e={contest_id:this.$route.params.contestID};m.a.getACMACInfo(e).then(function(e){t.loadingTable=!1;var n=e.data.data;t.total=n.length,t.acInfo=n,t.handlePage()}).catch(function(){t.loadingTable=!1})},updateCheckedStatus:function(t){var e=this,n={rank_id:t.id,contest_id:this.contestID,problem_id:t.problem_id,checked:!0};m.a.updateACInfoCheckedStatus(n).then(function(t){e.$success("Succeeded"),e.getACInfo()}).catch(function(){})},handleAutoRefresh:function(t){var e=this;t?this.refreshFunc=setInterval(function(){e.page=1,e.getACInfo()},1e4):clearInterval(this.refreshFunc)},handlePage:function(){1!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)&&(this.loadingTable=!0);var t=this.acInfo.slice((this.page-1)*this.limit,this.page*this.limit),e=!0,n=!1,s=void 0;try{for(var o,i=a()(t);!(e=(o=i.next()).done);e=!0){var r=o.value;r.init||(r.init=!0,r.problem_display_id=this.problemsMap[r.problem_id],r.ac_time=u()(this.contest.start_time).add(r.ac_info.ac_time,"seconds").local().format("YYYY-M-D  HH:mm:ss"))}}catch(t){n=!0,s=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw s}}this.pagedAcInfo=t,this.loadingTable=!1}}),computed:i()({},Object(r.mapState)({contest:function(t){return t.contest.contest},contestProblems:function(t){return t.contest.contestProblems}}),{limit:{get:function(){return this.$store.state.contest.rankLimit},set:function(t){this.$store.commit(c.b.CHANGE_CONTEST_RANK_LIMIT,{rankLimit:t})}}}),beforeDestroy:function(){clearInterval(this.refreshFunc)}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("m.ACM_Helper")))]),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("ul",{staticClass:"filter"},[n("li",[t._v("\n        "+t._s(t.$t("m.Auto_Refresh"))+" (10s)\n        "),n("i-switch",{staticStyle:{"margin-left":"5px"},on:{"on-change":t.handleAutoRefresh}})],1),t._v(" "),n("li",[n("Button",{attrs:{type:"info"},on:{click:t.getACInfo}},[t._v(t._s(t.$t("m.Refresh")))])],1)])]),t._v(" "),n("Table",{attrs:{data:t.pagedAcInfo,columns:t.columns,loading:t.loadingTable,"disabled-hover":""}}),t._v(" "),n("pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":""},on:{"update:pageSize":function(e){t.limit=e},"update:page-size":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.handlePage,"on-page-size-change":function(e){return t.handlePage(1)}}})],1)},staticRenderFns:[]};var f=n("VU/8")(h,p,!1,function(t){n("NKMc")},"data-v-50b83d98",null);e.default=f.exports}});