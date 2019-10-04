require('./bootstrap');

Vue.component('playlist', {
	template: `
	<div>
		<create 
			@songAdded="addNewSong"
		></create>
		<song 
			v-for="(song, index) in songs"
			:key=index
			:title=song.title
			:artist=song.artist			
		></song>
	</div>
	`,
	methods: {
		addNewSong(song){
			this.songs.push({
				title: song.title,
				artist: song.artist,
				favorited: false
			});
			console.log(song);
		}
	},
	data() {
		return {
			songs: [
				{
					title: "I want it that way",
					artist: "Backstreet Boys",
					favorited: false,
				},
				{
					title: "Whos bed have your boots been under",
					artist: "Shania Twain",
					favorited: false, 
				},
				{
					title: "Black or White",
					artist: "Michael Jackson",
					favorited: false,
				},
			]
		}
	}
});

Vue.component('create', {
	template: `
	<div>
		Title: <input v-model="newSong.title" /> <br>
		Artist: <input v-model="newSong.artist" /> <br>
		<button class="btn btn-primary" @click="add">Add Song</button> <br>
	</div>
	`,
	methods: {
		add(){
			$emit('songAdded', newSong);
		}
	},
	data(){
		return {
			newSong: {
				title: "",
				artist: "",
				favorited: false
			},
		}	
	}
});

Vue.component('song', {
	props: ['title', 'artist'],
	template: `
		<div>
			<h3> {{ title }} </h3>
			<p> {{ artist }} </p>
		</div>
	`
});

new Vue({
	el: "#app"
});