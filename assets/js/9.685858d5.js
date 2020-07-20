(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(v,r,t){v.exports=t.p+"assets/img/shuangxiang.f21bcd48.jpg"},366:function(v,r,t){v.exports=t.p+"assets/img/zhuangtaishu.b6f12301.jpg"},388:function(v,r,t){"use strict";t.r(r);var e=t(43),_=Object(e.a)({},(function(){var v=this,r=v.$createElement,e=v._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"什么是mvvm？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是mvvm？"}},[v._v("#")]),v._v(" 什么是mvvm？")]),v._v(" "),e("p",[v._v("在View和Model之间没有联系"),e("br"),v._v("\n通过ViewModel进行交互，而且Model和ViewModel之间的交互是双向的"),e("br"),v._v("\n因此视图的数据的变化会同时修改数据源，而数据源数据的变化也会立即反应view。"),e("br")]),v._v(" "),e("p",[v._v("Model: 模型层，在这里表示JavaScript对象"),e("br"),v._v("\nView:视图层，在这里表示DOM (HTML操作的元素)"),e("br"),v._v("\nViewModel: 连接视图和数据的中间件,Vue.js就是MVVM中的ViewModel层的实现者"),e("br")]),v._v(" "),e("p",[v._v("在MVVM架构中，是不允许数据和视图直接通信的，只能通过ViewModel来通信"),e("br"),v._v("\nViewModel能够观察到数据的变化，并对视图对应的内容进行更新"),e("br"),v._v("\nViewModel能够监听到视图的变化，并能够通知数据发生改变"),e("br")]),v._v(" "),e("h2",{attrs:{id:"vue双向数据绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue双向数据绑定"}},[v._v("#")]),v._v(" vue双向数据绑定")]),v._v(" "),e("p",[e("strong",[v._v("vue双向数据绑定")]),e("br"),v._v("\nVue是采用数据劫持结合发布/订阅模式的方式"),e("br"),v._v("\n通过Object.defineProperty()来劫持各个属性的setter，getter"),e("br"),v._v("\n在数据变动时发布消息给订阅者，触发相应的监听回调。"),e("br")]),v._v(" "),e("p",[v._v("Object.defineProperty()"),e("br"),v._v("\n读法：o波j.d烦 泼播踢"),e("br")]),v._v(" "),e("ol",[e("li",[v._v("实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。")]),v._v(" "),e("li",[v._v("实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。")]),v._v(" "),e("li",[v._v("实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。")])]),v._v(" "),e("p",[e("img",{attrs:{src:t(365),alt:"text"}})]),v._v(" "),e("h2",{attrs:{id:"vue中-key-值的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中-key-值的作用"}},[v._v("#")]),v._v(" vue中 key 值的作用")]),v._v(" "),e("p",[v._v("使用key来给每个节点做一个唯一标识"),e("br"),v._v("\nkey的作用主要是为了"),e("strong",[v._v("高效的更新虚拟DOM")]),v._v("。另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，"),e("br"),v._v("\n否则vue只会替换其内部属性而不会触发过渡效果。"),e("br")]),v._v(" "),e("h2",{attrs:{id:"v-if和v-show的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-show的区别"}},[v._v("#")]),v._v(" v-if和v-show的区别")]),v._v(" "),e("p",[v._v("请问 v-if 和 v-show 有什么区别？"),e("br"),v._v("\na.实现方式： v-if是根据后面数据的真假值判断直接从Dom树上删除或重建元素节点。  v-show只是在修改元素的css样式，也就是display的属性值，元素始终在Dom树上。"),e("br"),v._v("\nb.编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；  v-show只是简单的基于css切换；"),e("br"),v._v("\nc.编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译； v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素始终被保留；"),e("br"),v._v("\nd.性能消耗：v-if有更高的切换消耗，不适合做频繁的切换；  v-show有更高的初始渲染消耗，适合做频繁的额切换"),e("br")]),v._v(" "),e("h2",{attrs:{id:"computed和methods、watched区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#computed和methods、watched区别"}},[v._v("#")]),v._v(" computed和methods、watched区别")]),v._v(" "),e("p",[v._v("computed具有缓存性，基于依赖进行缓存的，只有相关的依赖发生改变才会重新缓存"),e("br"),v._v("\n在我们处理大量数据的时候使用可以大大提高效率"),e("br"),v._v("\n计算过程过于庞杂，而且会经常被调用的话，就使用计算属性"),e("br")]),v._v(" "),e("p",[v._v("methods只有在调用的时候才会执行对应的方法，结果不会缓存，重新渲染时，会重新调用执行"),e("br")]),v._v(" "),e("p",[v._v("watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。"),e("br")]),v._v(" "),e("p",[v._v("computed的性能比methods更高")]),v._v(" "),e("h2",{attrs:{id:"vuex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[v._v("#")]),v._v(" vuex")]),v._v(" "),e("p",[e("strong",[v._v("什么是vuex？")]),v._v("\nVuex 是一个专为 Vue.js 应用程序开发的状态管理模式"),e("br")]),v._v(" "),e("p",[v._v("五大核心:"),e("br"),e("br"),v._v("\nstate：(四爹t)保存共享状态的地方 响应式的 相当于data 处理用commit  单一状态树"),e("br"),e("br"),v._v("\ngetter：(给托)类似于组件里面的计算属性 相当于computed"),e("br"),e("br"),v._v("\nmutation：(谬贴神)方法 不能进行异步操作，只能同步函数"),e("br"),e("br"),v._v("\naction：(啊神)做一些异步操作 类似于mutation，但是用来替代mutation进行异步操作的 处理用dispatch"),e("br"),e("br"),v._v("\nmodule：(莫卓)划分模块 vuex允许我们将store分割模块，每个模块都拥有自己的state，mutations，action，getters等"),e("br"),e("br"),e("br"),e("br")]),v._v(" "),e("p",[v._v("修改state至少需要经过mutations，一般不直接修改state，直接修改记录不到是哪一次错误"),e("br"),v._v("\nmutations可以跟踪我们每一次提交的状态")]),v._v(" "),e("p",[e("img",{attrs:{src:t(366),alt:"text"}})]),v._v(" "),e("h2",{attrs:{id:"组件中的data为什么是一个函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件中的data为什么是一个函数"}},[v._v("#")]),v._v(" 组件中的data为什么是一个函数")]),v._v(" "),e("p",[v._v("组件的好处就是可以"),e("strong",[v._v("复用")]),v._v("，在多页面中进行反复调用"),e("br"),v._v("\n如果data不是一个函数的话，当组件发生改变，"),e("strong",[v._v("所有引用组件都将会发生改变")]),v._v("，这是我们所不希望看到的"),e("br")]),v._v(" "),e("h2",{attrs:{id:"父子组件的通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父子组件的通信"}},[v._v("#")]),v._v(" 父子组件的通信")]),v._v(" "),e("p",[v._v("在开发中往往有一些数据，需要从上层传递到下层"),e("br"),v._v("\n比如在一个页面中我们请求到了很多数据"),e("br"),v._v("\n其中一部分数据，并不是整个页面的大组件来展示的，而是需要给下面的子组件展示"),e("br"),v._v("\n这个时候，并不会让子组件再发送一次网络请求，而是让父组件将数据传递给子组件"),e("br")]),v._v(" "),e("p",[v._v("父组件向子组件传递："),e("br"),v._v("\nprops用于父组件向子组件传递数据"),e("br")]),v._v(" "),e("p",[v._v("子组件向父组件传递数据："),e("br")]),v._v(" "),e("p",[v._v("需要使用自定义事件"),e("br"),v._v("\n自定义事件的流程："),e("br")]),v._v(" "),e("ol",[e("li",[v._v("在子组件中，通过$emit()来触发事件。")]),v._v(" "),e("li",[v._v("在父组件中，通过v-on来监听子组件事件。")])]),v._v(" "),e("h2",{attrs:{id:"父子组件的访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父子组件的访问"}},[v._v("#")]),v._v(" 父子组件的访问")]),v._v(" "),e("p",[v._v("父组件访问子组件："),e("br"),v._v("\n使用$children或$refs reference(引用)"),e("br")]),v._v(" "),e("p",[v._v("子组件访问父组件："),e("br"),v._v("\n可以通过$parent(撇轮托)"),e("br")]),v._v(" "),e("h2",{attrs:{id:"脚手架src目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架src目录"}},[v._v("#")]),v._v(" 脚手架src目录")]),v._v(" "),e("p",[v._v("assets文件夹是放静态资源；"),e("br"),v._v("\ncomponents是放组件；"),e("br"),v._v("\nrouter是定义路由相关的配置;"),e("br"),v._v("\nview视图；"),e("br"),v._v("\napp.vue是一个应用主组件；"),e("br"),v._v("\nmain.js是入口文件"),e("br")]),v._v(" "),e("h2",{attrs:{id:"vue-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[v._v("#")]),v._v(" vue-router")]),v._v(" "),e("p",[e("strong",[v._v("什么是vue router？")]),v._v("\n路由模块的本质 就是建立起url和页面之间的映射关系")]),v._v(" "),e("p",[v._v("单页面应用的核心就是：更新视图而不会重新请求页面")]),v._v(" "),e("p",[e("strong",[v._v("动态路由的使用 /:id")]),e("br")]),v._v(" "),e("p",[e("strong",[v._v("路由懒加载")]),v._v("\n路由会定义很多不同的页面，这些页面最后都会被打包到一个js文件\n这么多页面放在一个js里面非常大，从服务器请求下来需花费一些事间，甚至造成页面短暂空白")]),v._v(" "),e("p",[v._v("路由懒加载作用就是将路由对应的组件打包成一个个的js代码块\n只有在这个路由被访问到的时候，才加载相应的组件\n有几个路由懒加载，就会多出几个js文件，用到的时候再从服务器请求下来")]),v._v(" "),e("p",[e("strong",[v._v("vue-router 有哪几种导航钩子?")]),e("br")]),v._v(" "),e("p",[v._v("全局导航钩子"),e("br")]),v._v(" "),e("ol",[e("li",[v._v("router.beforeEach(to, from, next),")]),v._v(" "),e("li",[v._v("router.beforeResolve(to, from, next),")]),v._v(" "),e("li",[v._v("router.afterEach(to, from ,next)")])]),v._v(" "),e("p",[v._v("组件内钩子"),e("br")]),v._v(" "),e("ol",[e("li",[v._v("beforeRouteEnter,")]),v._v(" "),e("li",[v._v("beforeRouteUpdate,")]),v._v(" "),e("li",[v._v("beforeRouteLeave")])]),v._v(" "),e("p",[v._v("单独路由独享组件"),e("br"),v._v("\nbeforeEnter")]),v._v(" "),e("h2",{attrs:{id:"keep-alive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[v._v("#")]),v._v(" keep-alive")]),v._v(" "),e("p",[v._v("把切换出去的组件保留在内存中，可以保留他的状态或避免重新渲染")]),v._v(" "),e("h2",{attrs:{id:"让css只在当前起作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#让css只在当前起作用"}},[v._v("#")]),v._v(" 让css只在当前起作用")]),v._v(" "),e("p",[v._v("加上 scoped")])])}),[],!1,null,null,null);r.default=_.exports}}]);