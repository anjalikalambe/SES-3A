from decouple import Config, RepositoryEnv
from flask import Flask, jsonify, send_from_directory
from flask_pymongo import PyMongo
from flask_socketio import SocketIO, close_room, join_room, leave_room, send, emit
from models import ChatMessage, ChatRoom
import socketio

app = Flask(__name__)
# app = Flask(__name__, static_url_path="", static_folder="../client/build")
socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000")

# Get mongodb
ENV_FILE = "../backend/.env"
env_config = Config(RepositoryEnv(ENV_FILE))
app.config["MONGO_URI"] = env_config.get("ATLAS_URI")

db = PyMongo(app).db

# @app.route("/", defaults={"path": ""})
# def serve(path):
#     return send_from_directory(app.static_folder, "index.html")

# Members API Route

@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 2"]}

# Private chat message handler
@socketio.on("private_message")
def handle_private_message(data):
    emit_data = {
        "message": data["message"],
        "messageType": data["type"]
    }
    # TODO: Save message to database based on room id (data["target"]) and sender (data["sender"]).
    emit("private_response", emit_data, to=data["target"], include_self=False)

# Chat room handler for one-on-one conversations
@socketio.on("join")
def on_join(data):
    room = data["room"]
    join_room(room)

# Leaving a chat room
@socketio.on("leave")
def on_leave(data):
    username = data["username"]
    room = data["room"]
    leave_room(room)
    send("{} has left the chat.".format(username), to=room)

# Remove both users and delete the room.
@socketio.on("destroy chat")
def on_destroy_chat(data):
    room = data["room"]
    close_room(room)

@app.route("/rooms")
def rooms():
	return jsonify({
			"roomName": "Studying Room",
			"meetingID": "ADQ88UFO9XU",
			"members": 10,
			"joinStatus": False,
			"males": 10,
			"females": 10,
			"participants": [
				{
					"id": 234423,
					"firstname": "Hi",
					"lastname": "There",
					"profileurl":
						"https://media-exp1.licdn.com/dms/image/C4E03AQGKZUoq6zit6g/profile-displayphoto-shrink_200_200/0/1625038325141?e=1637798400&v=beta&t=bvuCmzVVnAHSjUZr1tg0bCUmvV8jkegqW2-V3hd4Dxs",
				},
				{
					"id": 234423,
					"firstname": "Hi",
					"lastname": "There",
					"profileurl":
						"https://media-exp1.licdn.com/dms/image/C5603AQEEhC2pC4GaMw/profile-displayphoto-shrink_200_200/0/1614659345112?e=1637798400&v=beta&t=HBMMPuyCkQB_uUY1cNZ8gkOgm74a0FE48q-mAegk3mg",
				},
				{
					"id": 234423,
					"firstname": "Hi",
					"lastname": "There",
					"profileurl":
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
		{
			"roomName": "Chill Room",

			"meetingID": "ADQ88UFO9XU",
			"members": 5,
			"joinStatus": True,
			"males": 4,
			"females": 1,
			"participants": [
				{
					"id": 234423,
					"firstname": "Hi",
					"lastname": "There",
					"profileurl":
						"https://media-exp1.licdn.com/dms/image/C5603AQHE5E8_vT0t_Q/profile-displayphoto-shrink_200_200/0/1562993544013?e=1637798400&v=beta&t=Ca7zMXDROFjNjETu8nWKsGACKoWf9BIcLpWpUlhXRkM",
				},
				{
					"id": 1543,
					"firstname": "Test",
					"lastname": "Account",
					"profileurl":
						"https://media-exp1.licdn.com/dms/image/C5603AQEurSKMV7fiAg/profile-displayphoto-shrink_200_200/0/1622979741881?e=1637798400&v=beta&t=Bc4LnfsHovKmE5tmdIxT06XUPrhQxE92THRRaCSBJdY",
				},
				{
					"id": 1543,
					"firstname": "Test",
					"lastname": "Account",
					"profileurl":
						"https://media-exp1.licdn.com/dms/image/C5603AQFiBGe5XEJyMw/profile-displayphoto-shrink_200_200/0/1626264849392?e=1637798400&v=beta&t=M0Fn6tJICzAmz06TlVGqM-17t-yMgkNSlkN7fmqfmf8",
				},
			],
		},
		{
			"roomName": "Gaming Room",

			"meetingID": "ADQ88UFO9XU",
			"members": 8,
			"joinStatus": False,
			"males": 4,
			"females": 1,
			"participants": [
				{
					"id": 234423,
					"firstname": "Hi",
					"lastname": "There",
					"profileurl":
						"https://media-exp1.licdn.com/dms/image/C5603AQHN2onxohE7_w/profile-displayphoto-shrink_200_200/0/1623936378569?e=1637798400&v=beta&t=67cEfT7XTD_QlhVbf3eE6vYVyc9QxVOFHW5IRFflJRo",
				},
				{
					"id": 1543,
					"firstname": "Test",
					"lastname": "Account",
					"profileurl":
						"https://media-exp1.licdn.com/dms/image/C4D03AQFb_GTzFdpNrQ/profile-displayphoto-shrink_200_200/0/1616460488680?e=1637798400&v=beta&t=5MtDOoYZMZW2Iq6OCdXWivZzEtEtcXbdi2tntfQ_iB4",
				},
				{
					"id": 1543,
					"firstname": "Test",
					"lastname": "Account",
					"profileurl":
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
		{
			"roomName": "Chat Room",

			"meetingID": "ADQ88UFO9XU",
			"members": 3,
			"joinStatus": False,
			"males": 4,
			"females": 1,
			"participants": [
				{
					"id": 234423,
					"firstname": "Hi",
					"lastname": "There",
					"profileurl":
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					"id": 1543,
					"firstname": "Test",
					"lastname": "Account",
					"profileurl":
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					"id": 1543,
					"firstname": "Test",
					"lastname": "Account",
					"profileurl":
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		}
		)

if __name__ == "__main__":
    # app.run(debug=True)
    socketio.run(app)
