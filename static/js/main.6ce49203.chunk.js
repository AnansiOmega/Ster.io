(this["webpackJsonpsterio-frontend"]=this["webpackJsonpsterio-frontend"]||[]).push([[0],{179:function(e,t,n){},180:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),s=n.n(r),i=n(38),c=n.n(i),o=(n(179),n(17)),l=n(18),u=n(22),d=n(21),h=(n(180),n(27)),p=function(e){return{type:"FETCH_USER_SUCCESS",payload:e}},j=function(e){return{type:"CURRENT_USER",payload:e}},b=n(10),f=n(220),m=n(223),g=n(24),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",error:[]},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)};fetch("http://localhost:3000/auth",n).then((function(e){return e.json()})).then((function(t){t.error?e.setState({error:t.error}):(localStorage.setItem("myToken",t.token),e.props.fetchUserSuccess(t),e.props.history.push("/home"))}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{style:{color:"red"},children:this.state.error}),Object(a.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{name:"username",children:"Username:"}),Object(a.jsx)("input",{onChange:this.handleChange,type:"text",name:"username",value:this.state.username}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{onChange:this.handleChange,type:"password",name:"password",value:this.state.password}),Object(a.jsx)(m.a,{type:"submit",children:"Login"}),Object(a.jsx)(g.b,{to:"/signup",children:Object(a.jsx)(m.a,{children:"Sign up"})})]})]})}}]),n}(s.a.Component),y={fetchUserSuccess:p},x=Object(b.b)(null,y)(O),v=n(32),S=n.n(v),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",fname:"",lname:"",age:"",email:"",bio:"",image:"",errors:""},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleFileUpload=function(t){e.setState({image:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;for(var a in e.state)n.append(a,e.state[a]);S.a.post("http://localhost:3000/users",n).then((function(t){t.data.errors?e.setState({errors:t.data.errors}):S.a.post("http://localhost:3000/auth",n).then((function(t){t.data.error?e.setState({error:t.data.error}):(localStorage.setItem("myToken",t.data.token),e.props.fetchUserSuccess(t.data),e.props.history.push("/home"))}))}))},e.renderErrors=function(){return e.state.errors?e.state.errors.map((function(e){return e.split(" ")[0]})):[]},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Username")&&"Username must be valid",fluid:!0,label:"Username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Password")&&"Password can't be blank",fluid:!0,label:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Fname")&&"First name can't be blank",fluid:!0,label:"First Name",type:"text",name:"fname",value:this.state.fname,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Lname")&&"Last name can't be blank",fluid:!0,label:"Last Name",type:"text",name:"lname",value:this.state.lname,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{fluid:!0,label:"Age",type:"number",name:"age",value:this.state.age,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Email")&&"Email must be valid",fluid:!0,label:"Email",type:"text",name:"email",value:this.state.email,onChange:this.handleChange}),Object(a.jsx)(f.a.TextArea,{fluid:!0,label:"Bio",name:"bio",value:this.state.bio,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Profile Image"}),Object(a.jsx)("input",{type:"file",accept:"image/jpeg",onChange:this.handleFileUpload}),Object(a.jsx)(m.a,{type:"submit",children:"Signup"})]})}}]),n}(s.a.Component),k={fetchUserSuccess:p},E=Object(b.b)(null,k)(C),_=n(11),T=n(221),U=function(e){return{type:"SELECT_AUDIO",payload:e}},I=function(e){return{type:"TOGGLE_AUDIO",payload:e}},w=function(e){return{type:"SKIP_BACKWARD"}},A={selectAudio:U,toggleAudio:I,skipBackward:w},D=Object(b.b)((function(e){return{selectedTrack:e.selectAudio,auth:e.auth}}),A)((function(e){var t=e.handleDelete&&e.track.user.id===e.auth.id?Object(a.jsx)(m.a,{onClick:function(){return e.handleDelete(e.track)},circular:!0,icon:"delete",style:{float:"right"}}):null,n="/home/songUpload/".concat(e.track.id),r=e.track.id===e.selectedTrack?"rgba(0,166,124,0.5)":null,s="/users/".concat(e.track.user.id),i=e.className||null;return Object(a.jsxs)(T.a.Item,{className:i,onClick:function(){return e.selectAudio(e.track)},style:{backgroundColor:r},children:[Object(a.jsx)("div",{className:"col",style:{display:"flex",justifyContent:"flex-start",flexBasis:"100%"},children:Object(a.jsx)(T.a.Content,{style:{float:"left"},align:"left",children:e.track.title})}),Object(a.jsx)("div",{className:"col",style:{display:"flex",justifyContent:"center",flexBasis:"100%",float:"middle"},children:Object(a.jsx)("div",{style:{textAlign:"center"},children:e.track.genre})}),Object(a.jsx)(g.b,{to:s,children:Object(a.jsxs)(T.a.Content,{style:{float:"right"},children:[e.track.instrument,": ",e.track.user.username]})}),Object(a.jsxs)(T.a.Content,{style:{float:"left"},align:"left",children:[Object(a.jsx)(m.a,{onClick:e.skipBackward,circular:!0,icon:"stop"}),Object(a.jsx)(m.a,{style:{marginRight:"20px"},circular:!0,icon:"play",onClick:e.toggleAudio})]}),Object(a.jsxs)(T.a.Content,{style:{float:"middle",marginRight:"85px"},align:"middle",children:[Object(a.jsx)(g.b,{to:n,children:Object(a.jsx)(m.a,{circular:!0,children:"Collaborate"})}),t]})]})})),L=n(222),N={selectAudio:U,toggleAudio:I,skipBackward:w},R=Object(b.b)((function(e){return{selectedTrack:e.selectAudio,auth:e.auth}}),N)((function(e){var t="/home/songCollab/".concat(e.song.id),n=e.song.id===e.selectedTrack?"rgba(0,166,124,0.5)":null,r=e.className||null;return Object(a.jsxs)(T.a.Item,{className:r,onClick:function(){return e.selectAudio(e.song)},style:{backgroundColor:n},children:[Object(a.jsx)("div",{className:"col",style:{display:"flex",justifyContent:"flex-start",flexBasis:"100%"},children:Object(a.jsx)(T.a.Header,{style:{float:"left"},children:e.song.title})}),Object(a.jsx)(T.a.Header,{style:{textAlign:"center"},children:e.song.genre}),Object(a.jsx)(T.a.Content,{style:{float:"right",marginBottom:"5px"},children:function(){if(e.song.collab_tracks)return e.song.collab_tracks.map((function(t,n){var r=e.song.users[n];if(r.id){var s=r.id,i="/users/".concat(s),c=e.auth.id===s&&e.handleDeleteAssociation?Object(a.jsx)(m.a,{size:"mini",onClick:function(){return e.handleDeleteAssociation(t.id,e.song.id)},children:"Remove"}):null;return Object(a.jsxs)("div",{children:[Object(a.jsx)(g.b,{to:i,children:Object(a.jsxs)("p",{style:{lineHeight:"1.5"},children:[t.instrument,": ",t.user?t.user.username:r.username]})}),Object(a.jsx)("div",{style:{marginRight:"20px"},children:c})]})}}))}()}),Object(a.jsxs)(T.a.Header,{style:{float:"left"},children:[Object(a.jsx)(m.a,{onClick:e.skipBackward,circular:!0,icon:"stop"}),Object(a.jsx)(m.a,{icon:"play",circular:!0,onClick:e.toggleAudio})]}),Object(a.jsx)(T.a.Content,{style:{float:"middle",marginRight:"85px"},align:"middle",children:Object(a.jsx)(g.b,{to:t,children:Object(a.jsx)(m.a,{circular:!0,children:"Collaborate"})})})]})})),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).renderTracks=function(){return e.props.tracks.map((function(e){return Object(a.jsx)(T.a,{animated:!0,celled:!0,size:"tiny",children:Object(a.jsx)(D,{track:e},e.id)})}))},e.renderSongs=function(){return e.props.songs.map((function(e){return Object(a.jsx)(T.a,{animated:!0,celled:!0,size:"tiny",children:Object(a.jsx)(R,{song:e},e.id)})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/collab_tracks").then((function(e){return e.json()})).then((function(t){e.props.fetchCollabsSuccess(t)})),fetch("http://localhost:3000/songs").then((function(e){return e.json()})).then((function(t){e.props.fetchSongsSuccess(t)}))}},{key:"render",value:function(){var e=this,t=[{menuItem:"Tracks",render:function(){return Object(a.jsx)(L.a.Pane,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"list-header",align:"left",children:"Title"}),Object(a.jsx)("div",{className:"list-header",align:"middle",children:"Genre"}),Object(a.jsx)("div",{className:"list-header",align:"right",children:"Instrument"}),e.renderTracks()]})})}},{menuItem:"Songs",render:function(){return Object(a.jsx)(L.a.Pane,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"list-header",align:"left",children:"Title"}),Object(a.jsx)("div",{className:"list-header",align:"middle",children:"Genre"}),Object(a.jsx)("div",{className:"list-header",align:"right",children:"Instrument"}),e.renderSongs()]})})}}];return Object(a.jsx)("div",{children:Object(a.jsx)(L.a,{panes:t})})}}]),n}(s.a.Component),G={fetchCollabsSuccess:function(e){return{type:"FETCH_COLLABS_SUCCESS",payload:e}},fetchSongsSuccess:function(e){return{type:"FETCH_SONGS_SUCCESS",payload:e}}},B=Object(b.b)((function(e){return{tracks:e.collabTracks,songs:e.songs}}),G)(F),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={instrument:"",title:"",genre:"",user_id:e.props.auth.id,track:"",errors:[]},e.handleSubmit=function(t){t.preventDefault(),e.state.user_id||e.setState({user_id:e.props.auth.id});var n=new FormData;for(var a in e.state)n.append(a,e.state[a]);S.a.post("http://localhost:3000/collab_tracks",n).then((function(t){t.data.errors?e.setState({errors:t.data.errors}):e.props.history.push("/home")}))},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleFileUpload=function(t){e.setState({track:t.target.files[0]})},e.renderErrors=function(){return e.state.errors?e.state.errors.map((function(e){return e.split(" ")[0]})):[]},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(f.a,{className:"form",onSubmit:this.handleSubmit,children:[Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Title")&&"Title can't be blank",fluid:!0,label:"Title",type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Genre")&&"Genre can't be blank",fluid:!0,label:"Genre",type:"text",name:"genre",value:this.state.genre,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Instrument")&&"Instrument can't be blank",fluid:!0,label:"Instrument",type:"text",name:"instrument",value:this.state.instrument,onChange:this.handleChange}),this.renderErrors().includes("Track")?Object(a.jsx)("h4",{style:{color:"red"},children:"Track cannot be empty"}):null,Object(a.jsx)("input",{type:"file",accept:".mp3,audio/*",onChange:this.handleFileUpload}),Object(a.jsx)(m.a,{type:"submit",children:"Submit"})]})}}]),n}(s.a.Component),H=Object(b.b)((function(e){return{auth:e.auth}}))(P),q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={title:"",genre:"",instrument:"",user_id:e.props.auth.id,original_collab_track_id:e.props.match.params.id,track:"",errors:[]},e.renderTrack=function(){return e.props.track.map((function(e){return Object(a.jsx)(D,{track:e})}))},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;for(var a in e.state)n.append(a,e.state[a]);S.a.post("http://localhost:3000/collab_tracks",n).then((function(t){t.data.errors?e.setState({errors:t.data.errors}):(n.append("collab_track_id",t.data.id),S.a.post("http://localhost:3000/songs",n).then((function(t){e.props.history.push("/home")})))}))},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleFileUpload=function(t){e.setState({track:t.target.files[0]})},e.renderErrors=function(){return e.state.errors?e.state.errors.map((function(e){return e.split(" ")[0]})):[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.selectTrack(this.props.match.params.id)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(D,{track:this.props.track[0],className:"song-upload-track"})}),Object(a.jsxs)(f.a,{className:"form",onSubmit:this.handleSubmit,children:[Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Title")&&"Title can't be blank",fluid:!0,label:"Title",type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Genre")&&"Genre can't be blank",fluid:!0,label:"Genre",type:"text",name:"genre",value:this.state.genre,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Instrument")&&"Instrument can't be blank",fluid:!0,label:"Instrument",type:"text",name:"instrument",value:this.state.instrument,onChange:this.handleChange}),this.renderErrors().includes("Track")?Object(a.jsx)("h4",{style:{color:"red"},children:"Track cannot be empty"}):null,Object(a.jsx)("input",{type:"file",accept:".mp3,audio/*",onChange:this.handleFileUpload}),Object(a.jsx)(m.a,{type:"submit",children:"Submit"})]})]})}}]),n}(s.a.Component),M={selectTrack:function(e){return{type:"SELECT_TRACK",payload:e}}},z=Object(b.b)((function(e){return{auth:e.auth,track:e.collabTracks,audio:e.audio}}),M)(q),K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={title:"",genre:"",instrument:"",user_id:e.props.auth.id,track:"",collabIds:[],errors:[]},e.renderSongs=function(){return e.props.song.map((function(e){return Object(a.jsx)(R,{song:e,className:"song-collab-track"})}))},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;for(var a in e.state)n.append(a,e.state[a]);S.a.post("http://localhost:3000/collab_tracks",n).then((function(t){t.data.errors?e.setState({errors:t.data.errors}):(n.append("collab_track_id",t.data.id),S.a.post("http://localhost:3000/songCollab",n).then((function(t){e.props.history.push("/home")})))}))},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleFileUpload=function(t){e.setState({track:t.target.files[0]})},e.renderErrors=function(){return e.state.errors?e.state.errors.map((function(e){return e.split(" ")[0]})):[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.selectSong(this.props.match.params.id),setTimeout((function(){var t=e.props.song[0].collab_tracks.map((function(e){return e.id}));e.setState({collabIds:t})}),100)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:this.renderSongs()}),Object(a.jsxs)(f.a,{className:"form",onSubmit:this.handleSubmit,children:[Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Title")&&"Title can't be blank",fluid:!0,label:"Title",type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Genre")&&"Genre can't be blank",fluid:!0,label:"Genre",type:"text",name:"genre",value:this.state.genre,onChange:this.handleChange}),Object(a.jsx)(f.a.Input,{error:!!this.renderErrors().includes("Instrument")&&"Instrument can't be blank",fluid:!0,label:"Instrument",type:"text",name:"instrument",value:this.state.instrument,onChange:this.handleChange}),this.renderErrors().includes("Track")?Object(a.jsx)("h4",{style:{color:"red"},children:"Track cannot be empty"}):null,Object(a.jsx)("input",{type:"file",accept:".mp3,audio/*",onChange:this.handleFileUpload}),Object(a.jsx)(m.a,{type:"submit",children:"Submit"})]})]})}}]),n}(s.a.Component),J={selectSong:function(e){return{type:"SELECT_SONG",payload:e}}},W=Object(b.b)((function(e){return{auth:e.auth,song:e.songs}}),J)(K),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("myToken");if(t){var n={method:"GET",headers:{Authorization:"Bearer ".concat(t)}};fetch("http://localhost:3000/current_user",n).then((function(e){return e.json()})).then((function(t){t.error?e.props.history.push("/login"):e.props.currentUser(t)}))}else this.props.history.push("/login")}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(_.c,{children:[Object(a.jsx)(_.a,{exact:!0,path:"/home",component:B}),Object(a.jsx)(_.a,{path:"/home/upload",component:H}),Object(a.jsx)(_.a,{path:"/home/songUpload/:id",component:z}),Object(a.jsx)(_.a,{path:"/home/songCollab/:id",component:W})]})})}}]),n}(s.a.Component),V={currentUser:j},Q=Object(b.b)(null,V)(X),Y=n(60),Z=n(161),$=n(160),ee=n(219),te=n(155),ne=(n(204),n.p+"static/media/masterpiece-stallions-for-prince-ignas-2.8ef0af93.png"),ae=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={fetchedUser:!1,username:"",email:"",bio:"",image:"",open:!1,errors:""},e.handleDelete=function(t){var n=1===t.songs.length?"is 1 song":"are ".concat(e.props.user.songs.length," songs");window.confirm("There ".concat(n," using this track, are you you sure you want to delete this track?"))&&fetch("http://localhost:3000/collab_tracks/".concat(t.id),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){e.props.deleteCollabSuccess(t)}))},e.handleDeleteAssociation=function(t,n){var a={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({collab_track_id:t,song_id:n})};fetch("http://localhost:3000/song_collab",a).then((function(e){return e.json()})).then((function(t){e.props.deleteAssociationSuccess(t)}))},e.renderTracks=function(){return e.props.user.collab_tracks.map((function(t){return Object(a.jsx)(T.a,{animated:!0,celled:!0,size:"tiny",children:Object(a.jsx)(D,{track:t,handleDelete:e.handleDelete})})}))},e.renderSongs=function(){return e.props.user.songs.map((function(t){return Object(a.jsx)(T.a,{animated:!0,celled:!0,size:"tiny",children:Object(a.jsx)(R,{song:t,handleDeleteAssociation:e.handleDeleteAssociation})})}))},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value)),e.setState({open:!0})},e.handleFileUpload=function(t){e.setState({image:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault(),e.setState({open:!e.state.open});var n=new FormData;for(var a in e.state)n.append(a,e.state[a]);S.a.patch("http://localhost:3000/users/".concat(e.props.auth.id),n).then((function(t){t.data.errors?e.setState({errors:t.data.errors}):e.props.fetchedUser(t.data)}))},e.renderErrors=function(){e.state.errors&&(alert(e.state.errors),e.setState({errors:""}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("myToken");if(t){var n={method:"GET",headers:{Authorization:"Bearer ".concat(t)}};fetch("http://localhost:3000/current_user",n).then((function(e){return e.json()})).then((function(t){if(t.error)e.props.history.push("/login");else{e.props.currentUser(t);var n=e.props.match.params.id;fetch("http://localhost:3000/users/".concat(n)).then((function(e){return e.json()})).then((function(t){e.props.fetchedUser(t),e.setState({fetchedUser:!0,username:e.props.user.username,email:e.props.user.email,bio:e.props.user.bio})}))}}))}else this.props.history.push("/login")}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.match.url!==e.match.url){var n=this.props.match.params.id;fetch("http://localhost:3000/users/".concat(n)).then((function(e){return e.json()})).then((function(e){t.props.fetchedUser(e),t.setState({fetchedUser:!0,username:t.props.user.username,email:t.props.user.email,bio:t.props.user.bio})}))}}},{key:"render",value:function(){var e=this,t=[{menuItem:"Tracks",render:function(){return Object(a.jsx)(L.a.Pane,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",flexBasis:"100%"},children:[Object(a.jsx)("div",{style:{float:"left"},children:"Title"}),Object(a.jsx)("div",{style:{marginLeft:"35px",float:"middle",display:"flex",justifyContent:"center",flexBasis:"100%"},children:"Genre"}),Object(a.jsx)("div",{style:{float:"right"},children:"Instrument"})]}),e.state.fetchedUser?e.renderTracks():null]})})}},{menuItem:"Songs",render:function(){return Object(a.jsx)(L.a.Pane,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",flexBasis:"100%"},children:[Object(a.jsx)("div",{style:{float:"left"},children:"Title"}),Object(a.jsx)("div",{style:{marginLeft:"35px",float:"middle",display:"flex",justifyContent:"center",flexBasis:"100%"},children:"Genre"}),Object(a.jsx)("div",{style:{float:"right"},children:"Instrument"})]}),e.state.fetchedUser?e.renderSongs():null]})})}}],n=this.props.user,r=n.fname,s=n.lname,i=n.age,c=n.username,o=n.email,l=n.bio,u=this.props.auth.id===this.props.user.id?Object(a.jsx)("button",{children:Object(a.jsx)(Y.a,{name:"edit"})}):null,d=this.props.user.image?"http://localhost:3000".concat(this.props.user.image):ne;return Object(a.jsx)(Z.a,{celled:"internally",children:Object(a.jsxs)(Z.a.Row,{children:[Object(a.jsxs)(Z.a.Column,{width:3,children:[Object(a.jsx)($.a,{style:{height:"300px"},circular:!0,src:d}),Object(a.jsx)("div",{style:{width:"300px"},children:Object(a.jsx)(te.a,{open:this.state.open,onClose:!this.state.open,trigger:u,position:"right center",children:Object(a.jsx)("div",{style:{width:"250px",height:"450px"},children:Object(a.jsxs)(f.a,{onSubmit:this.handleSubmit,style:{width:"250px",height:"400px"},children:[Object(a.jsx)("label",{name:"username",children:"Username"}),Object(a.jsx)("input",{onChange:this.handleChange,type:"text",name:"username",value:this.state.username}),Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{onChange:this.handleChange,type:"text",name:"email",value:this.state.email}),Object(a.jsx)("label",{children:"Bio"}),Object(a.jsx)(ee.a,{style:{height:"200px"},onChange:this.handleChange,name:"bio",value:this.state.bio}),Object(a.jsx)("input",{type:"file",accept:"image/jpeg",onChange:this.handleFileUpload}),Object(a.jsx)(m.a,{type:"submit",children:"Update"})]})})})}),Object(a.jsxs)("h3",{children:["Username: ",c]}),Object(a.jsxs)("h4",{children:["Name: ",r," ",s]}),Object(a.jsxs)("h4",{children:["Age: ",i]}),Object(a.jsxs)("h4",{children:["Email: ",o]}),Object(a.jsxs)("h5",{children:["Bio: ",l]})]}),Object(a.jsx)(Z.a.Column,{width:10,children:Object(a.jsx)("div",{children:Object(a.jsx)(L.a,{panes:t})})})]})})}}]),n}(s.a.Component),re={currentUser:j,fetchedUser:function(e){return{type:"FETCHED_USER",payload:e}},deleteCollabSuccess:function(e){return{type:"DELETE_COLLAB_SUCCESS",payload:e}},deleteAssociationSuccess:function(e){return{type:"DELETE_ASSOCIATION_SUCCESS",payload:e}}},se=Object(b.b)((function(e){return{user:e.user,auth:e.auth}}),re)(ae),ie=n(159),ce={logoutUser:function(){return{type:"LOGOUT_USER"}}},oe=Object(b.b)((function(e){return{auth:e.auth}}),ce)((function(e){var t="/users/".concat(e.auth.id);return Object(a.jsxs)(ie.a,{children:[Object(a.jsx)(g.b,{to:"/home",children:Object(a.jsx)(ie.a.Item,{header:!0,children:"Ster.io"})}),Object(a.jsx)(g.b,{to:"/login",children:Object(a.jsx)(ie.a.Item,{name:"logout",onClick:function(){localStorage.removeItem("myToken"),e.logoutUser()}})}),Object(a.jsx)(g.b,{to:"/home/upload",children:Object(a.jsx)(ie.a.Item,{name:"Upload"})}),Object(a.jsx)(g.b,{to:t,children:Object(a.jsx)(ie.a.Item,{name:"My Profile"})})]})})),le=n(138),ue=n(157),de=n.n(ue),he=["audioprocess","error","finish","loading","mouseup","pause","play","ready","scroll","seek","zoom"],pe="waveform",je=Object(le.a)(Object(le.b)({state:{waveSurfer:null,isReady:!1},componentDidMount:function(){var e=this,t=this.state.isReady,n={container:"#".concat(pe)},a=Object.assign({},this.props.options,n),r=de.a.create(a);r.load(this.props.audioFile,this.props.peaks),r.on("ready",(function(){t=!0,e.props.playing&&r.play(),e.setState({waveSurfer:r,isReady:t})})),function(e,t,n){t.forEach((function(t){var a,r=n["on".concat((a=t,a.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")))];r&&e.on(t,(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r({waveSurfer:e,args:n})}))}))}(r,he,this.props),this.setState({waveSurfer:r,isReady:t})},componentWillUnmount:function(){Object.assign(this.state.waveSurfer).destroy(),this.setState({waveSurfer:null,isReady:!1})},componentDidUpdate:function(){var e=this;Object.assign(this.state.waveSurfer).mediaContainer.childNodes.forEach((function(t){t.style.overflow=e.props.squash?"overlay":"auto hidden",t.style.position=e.props.squash?"unset":"relative"}))},componentWillReceiveProps:function(e){var t=Object.assign(this.state.waveSurfer),n=!1;this.props.audioFile!==e.audioFile&&(this.setState({isReady:!1}),t.load(e.audioFile),n=!0),n||this.props.playing===e.playing&&t.isPlaying()===e.playing||(e.playing?t.play():t.pause()),n||this.props.reset===e.reset&&t.isPlaying()===e.playing||(e.reset?t.stop():t.play())}}))((function(e){var t=e.isReady,n=(e.options,e.audioFile,e.peaks,e.playing,e.loader),r=e.className;return Object(a.jsx)("div",{id:pe,className:r,children:!t&&n})})),be=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={squash:!1},e.renderAudioPlayers=function(){return e.props.audio.map((function(t){var n="http://localhost:3000".concat(t);return Object(a.jsx)(je,{audioFile:n,playing:e.props.toggle,reset:e.props.controls,options:{waveColor:"rgba(0,166,124,0.5)"},squash:e.state.squash})}))},e.squashToggle=function(){e.setState({squash:!e.state.squash})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.squash?{position:"relative",height:"100px"}:null,t=this.state.squash?"angle down":"angle up";return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(oe,{}),Object(a.jsx)("div",{style:e,children:this.renderAudioPlayers()}),Object(a.jsx)(m.a,{style:{float:"right",top:"100px"},icon:t,circular:!0,onClick:this.squashToggle}),Object(a.jsxs)(_.c,{children:[Object(a.jsx)(_.a,{exact:!0,path:"/login",component:x}),Object(a.jsx)(_.a,{exact:!0,path:"/signup",component:E}),Object(a.jsx)(_.a,{path:"/home",component:Q}),Object(a.jsx)(_.a,{path:"/users/:id",component:se})]})]})}}]),n}(s.a.Component),fe=Object(b.b)((function(e){return{audio:e.audio,toggle:e.audioToggle,controls:e.audioControls}}))(be),me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},ge=n(72),Oe=n(59),ye=[],xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COLLABS_SUCCESS":return Object(Oe.a)(t.payload);case"SELECT_TRACK":var n=e.filter((function(e){return e.id===parseInt(t.payload)}));return n;case"DELETE_COLLAB_SUCCESS":var a=e.filter((function(e){return e.id!==parseInt(t.payload.id)}));return a;case"SELECT_AUDIO":if(t.payload.collab_tracks)return e;var r=0===e.length?[t.payload]:e;return r;case"LOGOUT_USER":return[];default:return e}},ve=[],Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SONGS_SUCCESS":return Object(Oe.a)(t.payload);case"SELECT_SONG":var n=e.filter((function(e){return e.id===parseInt(t.payload)}));return n;case"DELETE_COLLAB_SUCCESS":var a=e.map((function(e){if(e&&e.collab_tracks)return e.collab_tracks.filter((function(e){return e.id!==t.payload.id}))}));return a;case"DELETE_ASSOCIATION_SUCCESS":var r=e.map((function(e){return e.id===t.payload.song.id?t.payload.song:e}));return r;case"SELECT_AUDIO":var s=0===e.length&&t.payload.collab_tracks?[t.payload]:e;return s;case"LOGOUT_USER":return[];default:return e}},Ce={},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SUCCESS":case"CURRENT_USER":return t.payload;case"LOGOUT_USER":return{};default:return e}},Ee=[],_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_AUDIO":var n="";return(n=t.payload.collab_tracks?t.payload.collab_tracks.map((function(e){return e.track})):t.payload.track)instanceof Array?n:[n];case"LOGOUT_USER":return[];default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SKIP_BACKWARD":return!0;case"TOGGLE_AUDIO":case"LOGOUT_USER":return!1;default:return e}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_AUDIO":return!e;case"LOGOUT_USER":return!1;default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_AUDIO":return t.payload.id;case"LOGOUT_USER":return"";default:return e}},we=n(47),Ae=n(158),De={},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_USER":var n,a=[],r=new Map,s=Object(Ae.a)(t.payload.songs);try{for(s.s();!(n=s.n()).done;){var i=n.value;r.has(i.id)||(r.set(i.id,!0),a.push({id:i.id,title:i.title,collab_tracks:Object(Oe.a)(i.collab_tracks),genre:i.genre,users:Object(Oe.a)(i.users)}))}}catch(b){s.e(b)}finally{s.f()}var c=Object(we.a)(Object(we.a)({},t.payload),{},{songs:a});return c;case"DELETE_COLLAB_SUCCESS":var o=e.collab_tracks.filter((function(e){return e.id!==t.payload.id})),l=e.songs.map((function(e){return e.collab_tracks.filter((function(e){return e.id!==t.payload.id}))})),u=e.songs.map((function(t){var n=t.users.findIndex((function(t){return t.id===e.id}));return t.users.splice(n,1),t.users})),d=e.songs.map((function(t,n){var a=l[n],r=u[n];if(r.map((function(e){return e.id})).includes(e.id))return Object(we.a)(Object(we.a)({},t),{},{collab_tracks:Object(Oe.a)(a),users:r})})),h=Object(we.a)(Object(we.a)({},e),{},{collab_tracks:o,songs:d.filter((function(e){return e}))});return h;case"DELETE_ASSOCIATION_SUCCESS":var p=e.songs.map((function(n){return n.id!==t.payload.song.id||(n=t.payload.song).users.find((function(t){return t.id===e.id}))?n:void 0})),j=Object(we.a)(Object(we.a)({},e),{},{songs:p.filter((function(e){return e}))});return j;case"LOGOUT_USER":return{};default:return e}},Ne=Object(ge.b)({auth:ke,collabTracks:xe,songs:Se,audio:_e,audioToggle:Ue,audioControls:Te,selectAudio:Ie,user:Le}),Re=(n(205),Object(ge.c)(Ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(Object(a.jsx)(b.a,{store:Re,children:Object(a.jsx)(g.a,{children:Object(a.jsxs)(s.a.StrictMode,{children:[Object(a.jsx)("script",{src:"https://unpkg.com/wavesurfer.js"}),Object(a.jsx)(fe,{})]})})}),document.getElementById("root")),me()}},[[206,1,2]]]);
//# sourceMappingURL=main.6ce49203.chunk.js.map