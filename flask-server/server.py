from flask import Flask, jsonify

app = Flask(__name__)


# Members API Route

@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 2"]}

@app.route("/rooms")
def rooms():
	return jsonify({
			"roomName": "Studying Room",
			"meetingID": "ADQ88UFO9XU",
			"members": 6,
			"joinStatus": False,
			"males": 10,
			"females": 10,
			"participants": [
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
			"roomName": "Studying Room",

			"meetingID": "ADQ88UFO9XU",
			"members": 6,
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
    app.run(debug=True)
