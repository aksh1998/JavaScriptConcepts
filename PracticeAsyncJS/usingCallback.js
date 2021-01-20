console.log("start");

function getUserID(email, callback) {
    setTimeout(() => {
        if (email && email !== undefined) {
            console.log("in user")
            callback({ userID: "bond007" })
            return
        }
        callback(null, new Error("User email dose not defined"))
    }, 1000);
}

function getUserVideos(userID, callback) {
    setTimeout(() => {
        if (userID && userID !== undefined) {
            callback(["Lesson 1", "Lesson 2", "Lesson 3"])
            return
        }
        callback(null, new Error("User ID dose not define"))
    }, 1000)
}

function getVideoTitle(title, callback) {
    setTimeout(() => {
        if (title && title !== undefined) {
            callback(title)
            return
        }
        callback(null, new Error("title is not defined"))
    }, 1000)
}


getUserID("", (user, err) => {
    if (err) {
        console.log(err.message)
        return
    }
    getUserVideos(user.userId, (videos, err) => {
        if (err) {
            console.log(err.message)
            return
        }
        getVideoTitle(videos[0], (title, err) => {
            if (err) {
                console.log(err.message)
                return
            }
            console.log("video title is:", title)
        })
    })
})

console.log("end");
