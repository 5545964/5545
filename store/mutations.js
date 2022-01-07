export default {
	setuser_state(state, data) {
		state.user_state = "",
		state.user_state = data
	},
	setstate(state, data) {
		state.state = "",
		state.state = data
	},
	setpopup(state,data){
		state.popup = data
	},
	set_user_id(state,data){
		state.user_id = data
	},
	set_name(state,data){
		state.name = data
	},
	set_phone(state,data){
		state.phone = data
	},
	set_latitude(state,data){
		state.latitude = data
	},
	set_longitude(state,data){
		state.longitude = data
	},
	set_stat(state,data){
		state.stat = data
	},
	set_sgdz_name(state,data){
		state.sgdz_name = data
	},
	
}
