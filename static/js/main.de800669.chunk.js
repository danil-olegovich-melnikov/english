(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(13),r=s.n(c),o=(s(22),s(3)),i=s(14),l=s(15),d=s(17),h=s(16),u=(s(23),s(24),s(0)),m=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).update_words=function(e){var t=e.split("\n").filter((function(e){return null!=e&&""!==e}));n.state.out_sentences.length=0,n.state.mistakes=new Set;var s={words:t,sentences:t};n.setState(s),console.log(t)},n.show_another_word=function(){var e=n.state.sentences.filter((function(e){return!n.state.out_sentences.includes(e)}));0===e.length&&(console.log(e.length),e=n.state.sentences,n.state.out_sentences.length=0);var t=e[Math.floor(Math.random()*e.length)];n.setState({sentence:t,out_sentences:[].concat(Object(o.a)(n.state.out_sentences),[t])})},n.number_of_rest_words=function(){return n.state.sentences.length-n.state.out_sentences.length},n.add_mistakes=function(){console.log(n.state.mistakes),n.setState({mistakes:new Set([].concat(Object(o.a)(n.state.mistakes),[n.state.sentence]))}),n.show_another_word()},n.state={out_sentences:[],words:[],sentences:[],sentence:"Insert words in area and press right",mistakes:new Set,show_mistakes:!1,update_words:!0},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsxs)("p",{className:"small float-left",children:["Number of words: ",this.number_of_rest_words()]}),Object(u.jsxs)("p",{className:"small float-right",children:["Number of mistakes: ",this.state.mistakes.size]}),Object(u.jsx)("div",{className:"py-4 h5",dangerouslySetInnerHTML:{__html:this.state.sentence}}),Object(u.jsx)("div",{className:"btn btn-danger",onClick:this.add_mistakes,children:"wrong"}),Object(u.jsx)("div",{className:"btn btn-success",onClick:this.show_another_word,children:"right"}),Object(u.jsx)("div",{className:"btn btn-block btn-light",onClick:function(){e.setState({update_words:!e.state.update_words})},children:"words"}),Object(u.jsx)("div",{className:"btn btn-light btn-block",onClick:function(){return e.setState({show_mistakes:!e.state.show_mistakes})},children:"mistakes"})]})}),this.state.show_mistakes&&Object(u.jsxs)("div",{className:"bg-white m-4 p-4 text-dark text-left",children:[Object(u.jsx)("h5",{children:"Mistakes:"}),Object(u.jsx)("ul",{className:"h6",children:Object(o.a)(this.state.mistakes).map((function(e){return Object(u.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},e)}))})]}),this.state.update_words&&Object(u.jsx)("div",{className:"form-group my-4",children:Object(u.jsx)("textarea",{className:"p-2",name:"words",rows:"10",placeholder:"Your words:",value:this.state.words.join("\n")+"\n",onChange:function(t){return e.update_words(t.target.value)}})})]})}}]),s}(a.a.Component);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.de800669.chunk.js.map