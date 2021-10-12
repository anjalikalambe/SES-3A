from operator import ne
from flask import Flask, jsonify
from csv import DictReader
import pandas as pd

app = Flask(__name__)

clusterArr = []

def cluster(arr):
	data = pd.read_csv('../ML/compiled_csv/clustered_profiles.csv')

	# read row line by line
	for d in data.values:
		# read column by index
		arr.append(d[9])
	return arr


# Members API Route

@app.route("/members")
def members():
    # return {"members": ["Member 1", "Member 2", "Member 2"]}
	return {"members": [cluster(clusterArr)]}


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
    app.run(debug=True)
