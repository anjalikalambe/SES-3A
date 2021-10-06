from flask import Flask, send_from_directory
from flask_socketio import SocketIO, close_room, join_room, leave_room, send, emit
import socketio

app = Flask(__name__)
# app = Flask(__name__, static_url_path="", static_folder="../client/build")
socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000")

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
    # print("Message: {}".format(data["message"]))
    emit_data = {
        "message": data["message"],
        "messageType": data["type"]
    }
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

if __name__ == "__main__":
    # app.run(debug=True)
    socketio.run(app)
