(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),u=a(44),s=(a(29),a(4)),c=a(5),i=a(8),m=a(6),d=a(9),h=a(45),p=a(43),v=a(46),f=a(11),b=a(10),E=a.n(b),j=a(13),y=a(14),O=a(15),C=a.n(O),g=(a(33),function(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Question"),l.a.createElement("input",{type:"text",name:"question",placeholder:"Your question?",value:e.question,onChange:e.handleChange})),l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Type"),l.a.createElement("select",{value:e.type,onChange:e.handleChange,name:"type"},l.a.createElement("option",{value:"text"},"Text"),l.a.createElement("option",{value:"number"},"Number"),l.a.createElement("option",{value:"yes/no"},"Yes/No")))),l.a.createElement("button",{onClick:e.handleAddInput,disabled:!e.disabled},"Add Sub-Input"),l.a.createElement("button",{onClick:e.handleDelete},"Delete"),l.a.createElement("button",{onClick:e.handleSave,disabled:!e.disabled},"Save Form")))}),x=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Condiotion"),l.a.createElement("select",null,l.a.createElement("option",{value:"==="},"Equals")),l.a.createElement("input",{type:"text",name:"value",onChange:e.handleChange,value:e.value})))},S=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Condiotion"),l.a.createElement("select",{value:e.condition,name:"condition",onChange:e.handleChange},l.a.createElement("option",{value:"==="},"Equals"),l.a.createElement("option",{value:">"},"Greather than"),l.a.createElement("option",{value:"<"},"Less than")),l.a.createElement("input",{type:"number",name:"value",onChange:e.handleChange,value:e.value})))},k=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"Condiotion"),l.a.createElement("select",{name:"condition",onChange:e.handleChange},l.a.createElement("option",{value:"==="},"Equals")),l.a.createElement("select",{name:"value",onChange:e.handleChange,value:e.value},l.a.createElement("option",{value:"no"},"No"),l.a.createElement("option",{value:"yes"},"Yes"))))},w=function(e){return l.a.createElement("div",null,l.a.createElement(F,{type:e.type,formObject:e.formObject,handleDelete:e.handleDelete}))},F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={question:"",type:"text",condition:"===",value:"",subInput:null,formObject:[]},a.handleDelete=function(){var e=a.state.formObject.map(function(e){return e});e.pop(),a.setState({subInput:null,formObject:e})},a.handleChange=function(e){var t=e.target.name;a.setState(Object(y.a)({},t,e.target.value))},a.handleAddInput=function(){var e={question:a.state.question,type:a.state.type,condition:a.state.condition,value:a.state.value},t=Object(f.a)(a.state.formObject);t.push(e),a.setState({formObject:t},function(){return a.handleSubImput()})},a.handleSubImput=function(){"yes/no"===a.state.type?a.setState({subInput:l.a.createElement(w,{type:"yes/no",formObject:a.state.formObject,handleDelete:a.handleDelete})}):"text"===a.state.type?a.setState({subInput:l.a.createElement(w,{type:"text",formObject:a.state.formObject,handleDelete:a.handleDelete})}):"number"===a.state.type&&a.setState({subInput:l.a.createElement(w,{type:"number",formObject:a.state.formObject,handleDelete:a.handleDelete})})},a.handleSave=function(){var e={question:a.state.question,type:a.state.type,condition:a.state.condition,value:a.state.value},t=Object(f.a)(a.state.formObject);t.push(e),a.setState({formObject:t},function(){return a.saveForm()})},a.saveForm=function(){function e(){return(e=Object(j.a)(E.a.mark(function e(t){var a,n,l;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.open("db-FormBuilder",2,function(e){return e.createObjectStore("objectStoreForm",{autoIncrement:!0})});case 2:return a=e.sent,n=a.transaction("objectStoreForm","readwrite"),l=n.objectStore("objectStoreForm"),e.next=7,l.put(t);case 7:return e.next=9,n.complete;case 9:a.close();case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(a.state.formObject)},a.validateInputs=function(){return!(!a.state.question||!a.props.value&&!a.state.value)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.formObject&&this.setState({formObject:this.props.formObject})}},{key:"render",value:function(){var e;return"yes/no"===this.props.type?e=l.a.createElement(k,{handleChange:this.handleChange,value:this.state.value,condition:this.state.condition}):"text"===this.props.type?e=l.a.createElement(x,{handleChange:this.handleChange,value:this.state.value,condition:this.state.condition}):"number"===this.props.type&&(e=l.a.createElement(S,{handleChange:this.handleChange,value:this.state.value,condition:this.state.condition})),l.a.createElement("div",null,l.a.createElement("div",{className:"Form"},e,l.a.createElement(g,{handleChange:this.handleChange,handleDelete:this.props.handleDelete,handleSave:this.handleSave,handleAddInput:this.handleAddInput,formObject:this.state.formObject,question:this.state.question,disabled:this.validateInputs(),type:this.state.type})),this.state.subInput)}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={form:[]},a.handleAddInput=function(){var e=Object(f.a)(a.state.form);e.push([]),a.setState({form:e})},a.handleDelete=function(e){var t=Object(f.a)(a.state.form);t.splice(e,1),a.setState({form:t})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h3",null,"Form builder"),this.state.form.map(function(t,a){return l.a.createElement(F,{key:a,value:!0,handleDelete:function(){return e.handleDelete(a)}})}),l.a.createElement("button",{onClick:this.handleAddInput},"Add Input"))}}]),t}(n.Component),N=a(12),q=function(e){var t=null;switch(e.type){case"text":t=l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"".concat(e.question,"? ")),l.a.createElement("input",{type:"text",name:"value",value:e.value,onChange:e.onChange}));break;case"number":t=l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"".concat(e.question,"? ")),l.a.createElement("input",{type:"number",name:"value",value:e.value,onChange:e.onChange}));break;case"yes/no":t=l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",null,"".concat(e.question,"? ")),l.a.createElement("select",{name:"value",onChange:e.onChange,value:e.value},l.a.createElement("option",{value:"no"},"No"),l.a.createElement("option",{value:"yes"},"Yes")));break;default:t=null}return l.a.createElement("div",null,t)},D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",formJson:"",formResult:[],index:0},a.handleChange=function(e){a.setState({value:e.target.value},function(){a.checkIndex()})},a.checkIndex=function(){a.state.index<a.state.formJson.length-1&&a.validateInput()},a.validateInput=function(){if("==="===a.state.formJson[a.state.index+1].condition){if(a.state.formJson[a.state.index+1].value===a.state.value){var e=Object(N.a)({},a.state.formResult);e[a.state.index].answer=a.state.value,a.setState({formResult:e,index:a.state.index+1,value:""})}}else if(">"===a.state.formJson[a.state.index+1].condition){if(Number(a.state.formJson[a.state.index+1].value)<Number(a.state.value)){var t=Object(N.a)({},a.state.formResult);t[a.state.index].answer=a.state.value,a.setState({formResult:t,index:a.state.index+1,value:""})}}else if("<"===a.state.formJson[a.state.index+1].condition&&Number(a.state.formJson[a.state.index+1].value)>Number(a.state.value)){var n=Object(N.a)({},a.state.formResult);n[a.state.index].answer=a.state.value,a.setState({formResult:n,index:a.state.index+1,value:""})}},a.handleSubmit=function(e){e.preventDefault();var t=Object(N.a)({},a.state.formResult);t[a.state.index].answer=a.state.value,a.setState({formResult:t},function(){return console.log(a.state.formResult)})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data.map(function(e){return[e.question]});this.setState({formJson:this.props.data,formResult:e})}},{key:"render",value:function(){var e=this.props.data[this.state.index],t=null;return this.state.index===this.state.formJson.length-1&&(t=l.a.createElement("p",null,"No more questions. Thanks")),l.a.createElement("div",null,l.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},l.a.createElement(q,{type:e.type,question:e.question,name:"value",value:this.state.value,onChange:this.handleChange}),t,l.a.createElement("button",{type:"submit",disabled:!t},"Submit")))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={forms:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;function t(){return(t=Object(j.a)(E.a.mark(function e(){var t,a,n,l;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.open("db-FormBuilder",2);case 2:return t=e.sent,a=t.transaction("objectStoreForm","readonly"),n=a.objectStore("objectStoreForm"),e.next=7,n.getAll();case 7:return l=e.sent,t.close(),e.abrupt("return",l);case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then(function(t){e.setState({forms:t})})}},{key:"render",value:function(){var e=null;return this.state.forms&&(e=this.state.forms.map(function(e,t){return l.a.createElement(D,{key:t,data:e})})),l.a.createElement("div",null,l.a.createElement("h3",null,"Your Forms"),e)}}]),t}(n.Component),J=(a(35),Object(v.a)(function(e){return l.a.createElement("nav",null,l.a.createElement("ul",{className:"Nav"},l.a.createElement("li",{onClick:function(){e.history.push("/form-builder")}},"Form Builder"),l.a.createElement("li",{onClick:function(){e.history.push("/form")}},"From")))})),R=(a(40),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Skygate form")),l.a.createElement(J,null),l.a.createElement(h.a,null,l.a.createElement(p.a,{path:"/form-builder",component:I}),l.a.createElement(p.a,{path:"/form",component:A})))}}]),t}(n.Component)),B=Object(v.a)(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=l.a.createElement(u.a,null,l.a.createElement(B,null));o.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.a125020d.chunk.js.map