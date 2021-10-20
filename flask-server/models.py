from flask_pymongo.wrappers import Database

class ChatRoom:
    """
    A sockets room containing two users.
    Has the following fields:
        'room_id'   :   unique chatroom id for socket connection
        'messages'  :   array containing ids of the chatroom's messages
    """

    def __init__(self, room_id: str, messages: list = None) -> None:
        self.room_id = room_id
        self.messages = [] if messages is None else messages

    def as_dict(self) -> dict:
        return {
            "room_id": self.room_id,
            "messages": self.messages
        }

class ChatMessage:
    """
    A chat message in a chat room.
    Has the following fields:
        'sender_id' :   unique id of the message's sender
        'message'   :   the message content as sent by sender
    """

    def __init__(self, sender_id: str, message: str) -> None:
        self.sender_id = sender_id
        self.message = message

    def as_dict(self) -> dict:
        return {
            "sender_id": self.sender_id,
            "message": self.message
        }

    def save(self, db: Database) -> None:
        """Save to chat message collection
        """
        result = db.chat_messages.insert_one(self.as_dict())
        
        # Push the message id to the chatroom's message array
        db.chat_rooms.update_one(
            {"room_id": result.inserted_id},
            {
                "$push": {"messages": result.inserted_id}
            }
        )

def main():
    # FOR TESTING ONLY
    ...

if __name__ == '__main__':
    main()
