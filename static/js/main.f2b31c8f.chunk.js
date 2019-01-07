(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(19),r=n.n(o),u=n(44),s=(n(29),n(5)),c=n(6),i=n(9),m=n(7),h=n(10),d=n(45),p=n(43),v=n(46),f=n(11),b=n.n(f),E=n(4),y=n(12),C=n(13),g=(n(31),function(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Question"),l.a.createElement("input",{type:"text",name:"question",placeholder:"Your question?",value:e.question,onChange:e.handleChange})),l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Type"),l.a.createElement("select",{onChange:e.handleChange,name:"type"},l.a.createElement("option",{value:"text"},"Text"),l.a.createElement("option",{value:"number"},"Number"),l.a.createElement("option",{value:"yes/no"},"Yes/No")))),l.a.createElement("button",{onClick:e.handleAddInput,disabled:!e.disableAdd},"Add Sub-Input"),l.a.createElement("button",{onClick:function(){return e.handleDelete(e.index)}},"Delete"),l.a.createElement("button",{onClick:e.handleSave,disabled:!e.disableSave},"Save Question"))}),j=function(e){return l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Condition"),l.a.createElement("select",null,l.a.createElement("option",{value:"==="},"Equals")),l.a.createElement("input",{type:"text",name:"value",onChange:e.handleChange,value:e.value}))},S=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Condiotion"),l.a.createElement("select",{value:e.condition,name:"condition",onChange:e.handleChange},l.a.createElement("option",{value:"==="},"Equals"),l.a.createElement("option",{value:">"},"Greather than"),l.a.createElement("option",{value:"<"},"Less than")),l.a.createElement("input",{type:"number",name:"value",onChange:e.handleChange,value:e.value})))},O=function(e){return l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Condiotion"),l.a.createElement("select",{name:"condition",onChange:e.handleChange},l.a.createElement("option",{value:"==="},"Equals")),l.a.createElement("select",{name:"value",onChange:e.handleChange,value:e.value},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"no"},"No"),l.a.createElement("option",{value:"yes"},"Yes")))},w=function(e){return l.a.createElement("div",null,l.a.createElement(k,e))},k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={question:"",type:"text",condition:"===",value:"",subInput:[]},n.handleDelete=function(e){var t=Object(E.a)(n.state.subInput);t.splice(e,1),n.setState({subInput:t})},n.handleChange=function(e){var t=e.target.name;n.setState(Object(C.a)({},t,e.target.value))},n.handleSubInput=function(){var e;n.props.handleSave(n.handleDataToPush(),n.props.index),(e=0===!n.state.subInput.length?Object(E.a)(n.props.data.answers):Object(E.a)(n.state.subInput)).push({type:n.state.type}),n.setState({subInput:e})},n.handleSave=function(e,t){var a=Object(E.a)(n.state.subInput),l=a[t];l.question=e.question,l.condition=e.condition,l.newType||(l.newType=e.type),l.value=e.value,l.answers?l.answers=e.answers:l.answers=[],a[t]=l,n.setState({subInput:a},function(){var e=Object(y.a)({},n.props.data,{answers:n.state.subInput});n.props.handleSave(e,n.props.index)})},n.validateSave=function(){return!(!n.state.question||!n.props.value&&!n.state.value||n.state.subInput.length)},n.validateAdd=function(){return!(!n.state.question||!n.props.value&&!n.state.value)},n.handleDataToPush=function(){return{question:n.state.question,type:n.state.type,condition:n.state.condition,value:n.state.value,answers:[]}},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this;return"yes/no"===this.props.type?e=l.a.createElement(O,{handleChange:this.handleChange,value:this.state.value,condition:this.state.condition}):"text"===this.props.type?e=l.a.createElement(j,{handleChange:this.handleChange,value:this.state.value,condition:this.state.condition}):"number"===this.props.type&&(e=l.a.createElement(S,{handleChange:this.handleChange,value:this.state.value,condition:this.state.condition})),l.a.createElement("div",{className:"Margin"},l.a.createElement("div",{className:"Form"},e,l.a.createElement(g,{handleChange:this.handleChange,handleDelete:this.props.handleDelete,index:this.props.index,handleSave:function(){return t.props.handleSave(t.handleDataToPush(),t.props.index)},handleAddInput:this.handleSubInput,question:this.state.question,disableSave:this.validateSave(),disableAdd:this.validateAdd(),type:this.state.type})),this.state.subInput.map(function(e,n){return l.a.createElement(w,{type:e.type,key:n,index:n,data:t.state.subInput[n],handleSave:t.handleSave,handleDelete:function(e){return t.handleDelete(e)}})}))}}]),t}(a.Component),q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={form:[]},n.handleAddInput=function(){var e=Object(E.a)(n.state.form);e.push([]),n.setState({form:e})},n.handleDelete=function(e){var t=Object(E.a)(n.state.form);t.splice(e,1),n.setState({form:t})},n.handleSave=function(e,t){var a=Object(E.a)(n.state.form);a[t]=e,n.setState({form:a})},n.handleSaveForm=function(e){var t=n.state.form[e];b.a.open("db-FormBuilder",2).then(function(e){var n=e.transaction("Forms","readwrite");return n.objectStore("Forms").put(t),n.complete}).then(function(e){return console.log("object stored")})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h3",null,"Form builder"),this.state.form.map(function(t,n){return l.a.createElement("div",{key:n},l.a.createElement(k,{index:n,value:!0,data:e.state.form[n],handleSave:e.handleSave,handleDelete:function(){return e.handleDelete(n)}}),l.a.createElement("button",{onClick:function(){return e.handleSaveForm(n)},disabled:!e.state.form[n].question},"Store Form"))}),l.a.createElement("button",{onClick:this.handleAddInput},"Add Input"))}}]),t}(a.Component),F=n(16),N=n.n(F),I=n(20),x=function(e){var t=null;switch(e.type){case"text":t=l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"".concat(e.question,"? ")),l.a.createElement("input",{type:"text",name:"value",value:e.value,onChange:e.onChange}));break;case"number":t=l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"".concat(e.question,"? ")),l.a.createElement("input",{type:"number",name:"value",value:e.value,onChange:e.onChange}));break;case"yes/no":t=l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"".concat(e.question,"? ")),l.a.createElement("select",{name:"value",onChange:e.onChange,value:e.value},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"no"},"No"),l.a.createElement("option",{value:"yes"},"Yes")));break;default:t=null}return l.a.createElement("div",null,t)},A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",formJson:"",formResult:[]},n.handleChange=function(e){n.setState({value:e.target.value},function(){return n.validateInput()})},n.validateInput=function(){n.state.formJson.answers.forEach(function(e){if(n.chceckCondition(e.value,e.condition)){var t=Object(E.a)(n.state.formResult);t.push({question:n.state.formJson.question,answer:n.state.value}),n.setState({formJson:e,value:"",formResult:t})}})},n.chceckCondition=function(e,t){return">"===t?Number(n.state.value)>Number(e):"<"===t?Number(n.state.value)<Number(e):e===n.state.value},n.handleSubmit=function(e){e.preventDefault();var t=Object(E.a)(n.state.formResult);t.push({question:n.state.formJson.question,answer:n.state.value}),n.setState({formResult:t},function(){return console.log(n.state.formResult)})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({formJson:this.props.data})}},{key:"render",value:function(){var e=null,t=Object(y.a)({},this.state.formJson);this.state.formJson&&0===t.answers.length&&(e=l.a.createElement("p",null,"No more questions. Thanks"));var n=t.newType;return t.newType||(n=t.type),l.a.createElement("div",null,l.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},l.a.createElement(x,{type:n,question:t.question,name:"value",value:this.state.value,onChange:this.handleChange}),e,l.a.createElement("button",{type:"submit",disabled:!e},"Submit")))}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={forms:null},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;function t(){return(t=Object(I.a)(N.a.mark(function e(){var t,n,a,l;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.open("db-FormBuilder",2);case 2:if(!(t=e.sent).objectStoreNames.contains("Forms")){e.next=11;break}return n=t.transaction("Forms","readonly"),a=n.objectStore("Forms"),e.next=8,a.getAll();case 8:return l=e.sent,t.close(),e.abrupt("return",l);case 11:t.close();case 12:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then(function(t){e.setState({forms:t})})}},{key:"render",value:function(){var e=null;return this.state.forms&&(e=this.state.forms.map(function(e,t){return l.a.createElement(A,{key:t,data:e})})),l.a.createElement("div",null,l.a.createElement("h3",null,"Your Forms"),e)}}]),t}(a.Component),J=(n(35),Object(v.a)(function(e){return l.a.createElement("nav",null,l.a.createElement("ul",{className:"Nav"},l.a.createElement("li",{onClick:function(){e.history.push("/form-builder")}},"Form Builder"),l.a.createElement("li",{onClick:function(){e.history.push("/form")}},"Form")))})),T=(n(40),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){b.a.open("db-FormBuilder",2,function(e){return e.createObjectStore("Forms",{autoIncrement:!0})}).then(function(e){return console.log("Object created")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Skygate form")),l.a.createElement(J,null),l.a.createElement(d.a,null,l.a.createElement(p.a,{path:"/form-builder",component:q}),l.a.createElement(p.a,{path:"/form",component:D})))}}]),t}(a.Component)),B=Object(v.a)(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=l.a.createElement(u.a,null,l.a.createElement(B,null));r.a.render(R,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.f2b31c8f.chunk.js.map