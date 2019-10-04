require('./bootstrap');

Vue.component('playlist', {
	template: `
		<div>
			Title: <input v-model="newSong.title" /> <br>
			Artist: <input v-model="newSong.artist" /> <br>
			<button class="btn btn-primary" @click="addSong">Add Song</button> <br>
			<ul>
				<song v-for="(song, index) in songs" :key="index">
					<p>Title: {{ song.title }}</p>
					<small>Artist: {{ song.artist }}</small> <br>
					<button class="btn btn-danger" @click="removeSong(index)">Remove</button> 
					<button class="btn" :class="{ 'btn-dark' : !song.favorited , 'btn-warning' : song.favorited }" @click="toggleFavorite(index)">Favorite</button> <br>
				</song>
			</ul>
		</div>
	`,
	methods: {
		addSong(){
			//push new song into songs array
			this.songs.push({
				title: this.newSong.title,
				artist: this.newSong.artist,
			});

			//clear new song object
			this.newSong.title = "";
			this.newSong.artist = "";
		},
		removeSong(index){
			this.songs.splice(index, 1);
		},
		toggleFavorite(index){
			this.songs[index].favorited = !this.songs[index].favorited;
		}
	},
	data() {
		return {
			newSong: {
				title: "",
				artist: "",
				favorited: false
			},
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

Vue.component('song', {
	template: `
		<li class="track-details"><slot></slot></li>
	`,
});

new Vue({
	el: "#app"
});