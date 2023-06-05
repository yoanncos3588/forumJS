# MLD

```
user ( id INT, username TEXT, email TEXT, password TEXT )

category ( id INT, name TEXT, description TEXT, #user(id) )
topic ( id INT, name TEXT, description TEXT, #user(id), #category(id) )

role (id INT, name TEXT, level INT )
user_has_role ( #user(id), #role(id) )

message ( id INT, content TEXT, #user(id), #topic(id) )
user_like_message ( #user(id), #message(id) )

```
