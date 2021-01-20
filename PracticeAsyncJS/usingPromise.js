console.log("start");

function getUserID(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email && email !== undefined) {
                resolve({ userID: "bond007" })
            }
            reject(new Error("User email dose not defined"))
        }, 1000);
    })
}

function getUserVideos(userID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userID && userID !== undefined) {
                resolve(["Lesson 1", "Lesson 2", "Lesson 3"])
            }
            reject(new Error("User ID dose not define"))
        }, 1000)
    })
}

function getVideoTitle(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (title && title !== undefined) {
                resolve(title)
            }
            reject(new Error("title is not defined"))
        }, 1000)
    })
}

getUserID("")
    .then(user => getUserVideos(user.userId)
        .then(videos => getVideoTitle(videos[0])
            .then(title => console.log("video title is:", title))
            .catch(err => console.log(err.message))
        ).catch(err => console.log(err.message))
    ).catch(err => console.log(err.message))

console.log("end");
