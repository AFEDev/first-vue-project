"use strict";(self["webpackChunkfirst_vue_project"]=self["webpackChunkfirst_vue_project"]||[]).push([[342],{342:function(o,t,e){e.r(t),e.d(t,{default:function(){return Q}});var l=e(252),d=e(963);const n=(0,l._)("h2",null,"Todo app",-1),i=(0,l.Uk)("Home"),u=(0,l._)("hr",null,null,-1),r=(0,l._)("option",{value:"all"},"All",-1),s=(0,l._)("option",{value:"completed"},"Completed",-1),p=(0,l._)("option",{value:"not-completed"},"Not Completed",-1),c=[r,s,p],a=(0,l._)("hr",null,null,-1),m={key:2};function v(o,t,e,r,s,p){const v=(0,l.up)("router-link"),_=(0,l.up)("AddTodo"),h=(0,l.up)("Loader"),f=(0,l.up)("TodoList");return(0,l.wg)(),(0,l.iD)("div",null,[n,(0,l.Wm)(v,{to:"/"},{default:(0,l.w5)((()=>[i])),_:1}),u,(0,l.Wm)(_,{onAddTodo:p.addTodo},null,8,["onAddTodo"]),(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.filter=o)},c,512),[[d.bM,s.filter]]),a,s.loading?((0,l.wg)(),(0,l.j4)(h,{key:0})):p.filteredTodos.length?((0,l.wg)(),(0,l.j4)(f,{key:1,todos:p.filteredTodos,onRemoveTodo:p.removeTodo},null,8,["todos","onRemoveTodo"])):((0,l.wg)(),(0,l.iD)("p",m,"No todos!!!"))])}function _(o,t,e,d,n,i){const u=(0,l.up)("TodoItem");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.todos,((o,t)=>((0,l.wg)(),(0,l.j4)(u,{todo:o,index:t,key:o.id,onRemoveTodo:i.removeTodo},null,8,["todo","index","onRemoveTodo"])))),128))])])}var h=e(577);const f=(0,l._)("input",{type:"checkbox"},null,-1);function T(o,t,e,d,n,i){return(0,l.wg)(),(0,l.iD)("li",null,[(0,l._)("span",{class:(0,h.C_)({done:e.todo.completed})},[f,(0,l._)("strong",null,(0,h.zw)(e.index+1),1),(0,l.Uk)(" "+(0,h.zw)(i.uppercase(e.todo.title))+" "+(0,h.zw)(e.todo.completed),1)],2),(0,l._)("button",{class:"rm",onClick:t[0]||(t[0]=t=>o.$emit("remove-todo",e.todo.id))},"×")])}var w={props:{todo:{type:Object,required:!0},index:Number},computed:{uppercase(){return o=>o.toUpperCase()}}},g=e(744);const b=(0,g.Z)(w,[["render",T]]);var k=b,y={props:["todos"],components:{TodoItem:k},methods:{removeTodo(o){this.$emit("remove-todo",o)}}};const C=(0,g.Z)(y,[["render",_],["__scopeId","data-v-c327e71e"]]);var D=C;const j=o=>((0,l.dD)("data-v-efd62e54"),o=o(),(0,l.Cn)(),o),x=j((()=>(0,l._)("button",{type:"submit"},"Create",-1)));function A(o,t,e,n,i,u){return(0,l.wg)(),(0,l.iD)("form",{onSubmit:t[1]||(t[1]=(0,d.iM)(((...o)=>u.onSubmit&&u.onSubmit(...o)),["prevent"]))},[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>i.title=o)},null,512),[[d.nr,i.title]]),x],32)}var S={data(){return{title:""}},methods:{onSubmit(){if(console.log("Submit",this.title),this.title.trim()){const o={id:Date.now(),title:this.title,completed:!1};this.$emit("add-todo",o),this.title=""}}}};const U=(0,g.Z)(S,[["render",A],["__scopeId","data-v-efd62e54"]]);var Z=U;const I={class:"lds-spinner"},L=(0,l._)("div",null,null,-1),R=(0,l._)("div",null,null,-1),z=(0,l._)("div",null,null,-1),N=(0,l._)("div",null,null,-1),$=(0,l._)("div",null,null,-1),H=(0,l._)("div",null,null,-1),M=(0,l._)("div",null,null,-1),V=(0,l._)("div",null,null,-1),W=(0,l._)("div",null,null,-1),q=(0,l._)("div",null,null,-1),K=(0,l._)("div",null,null,-1),O=(0,l._)("div",null,null,-1),Y=[L,R,z,N,$,H,M,V,W,q,K,O];function B(o,t){return(0,l.wg)(),(0,l.iD)("div",I,Y)}const E={},F=(0,g.Z)(E,[["render",B]]);var G=F,J={name:"app",data(){return{todos:[],loading:!0,filter:"all"}},mounted(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((o=>o.json())).then((o=>{setTimeout((()=>{this.todos=o,this.loading=!1}),1e3)}))},computed:{filteredTodos(){let o;return"all"===this.filter&&(o=this.todos),"completed"===this.filter&&(o=this.todos.filter((o=>o.completed))),"not-completed"===this.filter&&(o=this.todos.filter((o=>!o.completed))),o}},methods:{removeTodo(o){this.todos=this.todos.filter((t=>t.id!==o))},addTodo(o){this.todos.push(o)}},components:{TodoList:D,AddTodo:Z,Loader:G}};const P=(0,g.Z)(J,[["render",v]]);var Q=P}}]);
//# sourceMappingURL=342.c88a43d6.js.map