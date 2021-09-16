from flask import Flask

app = Flask(__name__)


# Members API Route

@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 2"]}



@app.route("rooms")
def rooms():
    return {
        {
			"roomName": "Chill Room",

			"meetingID": "JAP43ZST0ZL",
			"members": 15,
			"joinStatus": true,
			"males": 4,
			"females": 7,
			"participants": [
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
    }

if __name__ == "__main__":
    app.run(debug=True)
