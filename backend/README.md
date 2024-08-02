# Pocket Notes - Backend

Chat with your notes

## Setup Locally

#### Prerequisites

* [MongoDB](https://www.mongodb.com/cloud/atlas).
* [NodeJS](https://nodejs.org/) and [ExpressJS](https://expressjs.com/).
* [ReactJS](https://reactjs.org/).

#### Instructions

```
>> git clone https://github.com/TangoBeee/Pocket-Notes.git
>> cd PocketNotes/frontend
```

On Windows:
```
>> bash install.sh
>> bash run.sh
```

On Mac:
```
>> sh install.sh
>> sh run.sh
```

On Linux:
```
>> ./install.sh
>> ./run.sh
```

#### In `root` directory of `Pocket-Notes/backend`
* Create a `.env` file.
* Add your port number where server will run.
* Add your `MongoDB Atlas` connection url in `MONGODB_CONNECTION_URL` field.
```
PORT = 1234
MONGODB_CONNECTION_URL = <URL>
```
* [Here is [the Video](https://www.youtube.com/watch?v=KKyag6t98g8) Tutorial for how to create MongoDB Atlas account and connect to NodeJS application].
