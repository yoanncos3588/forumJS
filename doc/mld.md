# MLD

```
user ( id INT, username TEXT, email TEXT, password TEXT, created_at DATE, updated_at DATE )

category ( id INT, name TEXT, description TEXT, #user(id), created_at DATE, updated_at DATE )
topic ( id INT, name TEXT, description TEXT, #user(id), #category(id), created_at DATE, updated_at DATE )

role (id INT, name TEXT, level INT )
user_has_role ( #user(id), #role(id), created_at DATE, updated_at DATE )

message ( id INT, #user(id), #topic(id), type TEXT, created_at DATE, updated_at DATE )
message_basic ( id INT, content TEXT, #message(id) )

user_like_message ( #user(id), #message(id) )

```
