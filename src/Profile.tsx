import React from 'react';

function Profile() {
	return (
		<>
			<span className="user_name">김덕밥</span>
			<div>
				<div className="profile_container">
					<img src="iu.jpeg" alt="profile" />
					<span>아이유</span>
				</div>
				<div>
					<div className="level_container">
						<span className="level_text">LV.</span>
						<div className="level_bar" />
					</div>
					<div className="favorites_icon_container">
						<div className="favorites_icon" />
						<div className="favorites_icon" />
						<div className="favorites_icon" />
						<div className="favorites_icon" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
